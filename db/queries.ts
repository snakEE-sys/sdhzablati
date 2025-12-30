import { db } from "@/db/db";
import {
  categories,
  vyjezd,
  technika,
  jednotky,
  vyjezdToTechnika,
  vyjezdToJednotky,
  subcategories,
} from "@/db/schema/vyjezd";
import { posts, posts_categories } from "./schema/posts";
import { desc, eq } from "drizzle-orm";

// --- Insert Functions ---
/*
async function insertCategory(name: string) {
  try {
    const result = await db.insert(categories).values({ name }).returning();
    console.log("Inserted category:", result);
    return result[0]; // Return the inserted category object
  } catch (error) {
    console.error("Error inserting category:", error);
    throw error;
  }
}

async function insertSubcategory(name: string, categoryName: string) {
  try {
    const categoryResult = await db.query.categories.findFirst({
      where: eq(categories.name, categoryName),
    });

    if (!categoryResult) {
      throw new Error(`Category with name '${categoryName}' not found.`);
    }

    const categoryId = categoryResult.id;

    const result = await db
      .insert(subcategories)
      .values({ name, categoryId })
      .returning();
    console.log("Inserted subcategory:", result);
    return result[0];
  } catch (error) {
    console.error("Error inserting subcategory:", error);
    throw error;
  }
}
*/
export async function getCategories() {
  try {
    const categories = await db.query.categories.findMany({
      columns: {
        id: true,
        name: true,
      },
    });
    return {
      categories: categories.map((category) => ({
        id: category.id,
        name: category.name,
      })),
    };
  } catch (error) {
    throw new Error(error as string);
  }
}
export async function getSubcategories() {
  try {
    const subcategories = await db.query.subcategories.findMany({
      columns: {
        id: true,
        name: true,
      },
    });
    return {
      subcategories: subcategories.map((subcategory) => ({
        id: subcategory.id,
        name: subcategory.name,
      })),
    };
  } catch (error) {
    throw new Error(error as string);
  }
}
export async function getTechnika() {
  try {
    const technika = await db.query.technika.findMany({
      columns: {
        id: true,
        name: true,
      },
    });
    return {
      technika: technika.map((technika) => ({
        id: technika.id,
        name: technika.name,
      })),
    };
  } catch (error) {
    throw new Error(error as string);
  }
}
export async function getJednotky() {
  try {
    const jednotky = await db.query.jednotky.findMany({
      columns: {
        id: true,
        name: true,
      },
    });
    return {
      jednotky: jednotky.map((jednotky) => ({
        id: jednotky.id,
        name: jednotky.name,
      })),
    };
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function insertVyjezd(
  date: string,
  time: string,
  description: string,
  address: string,
  categoryName: string,
  subcategoryName: string,
  technikaNames: string[],
  jednotkyNames: string[]
) {
  try {
    // 1. Find the category ID based on the category name using db.query
    const categoryResult = await db.query.categories.findFirst({
      where: eq(categories.name, categoryName),
    });

    if (!categoryResult) {
      throw new Error(`Category with name '${categoryName}' not found.`);
    }

    const categoryId = categoryResult.id;

    // 2. Find the subcategory ID based on the subcategory name using db.query
    const subcategoryResult = await db.query.subcategories.findFirst({
      where: eq(subcategories.name, subcategoryName),
    });
    if (!subcategoryResult) {
      throw new Error(`Subcategory with name '${subcategoryName}' not found.`);
    }

    const subcategoryId = subcategoryResult.id;

    // 3. Find the Technika IDs based on the Technika names using db.query
    const technikaIds = await Promise.all(
      technikaNames.map(async (technikaName) => {
        const technikaResult = await db.query.technika.findFirst({
          where: eq(technika.name, technikaName),
        });
        if (!technikaResult) {
          throw new Error(`Technika with name '${technikaName}' not found.`);
        }
        return technikaResult.id;
      })
    );

    // 4. Find the Jednotky IDs based on the Jednotky names using db.query
    const jednotkyIds = await Promise.all(
      jednotkyNames.map(async (jednotkyName) => {
        const jednotkyResult = await db.query.jednotky.findFirst({
          where: eq(jednotky.name, jednotkyName),
        });
        if (!jednotkyResult) {
          throw new Error(`Jednotky with name '${jednotkyName}' not found.`);
        }
        return jednotkyResult.id;
      })
    );

    // 5. Create the vyjezd record
    const result = await db
      .insert(vyjezd)
      .values({ date, time, description, address, categoryId, subcategoryId })
      .returning();

    const newVyjezd = result[0];

    // 6. Associate the Vyjezd with Technika
    await associateVyjezdWithTechnika(newVyjezd.id, technikaIds);

    // 7. Associate the Vyjezd with Jednotky
    await associateVyjezdWithJednotky(newVyjezd.id, jednotkyIds);

    return newVyjezd;
  } catch (error) {
    throw new Error(error as string);
  }
}
/*
async function insertTechnika(name: string) {
  try {
    const result = await db
      .insert(technika)
      .values({ name })
      .returning({ Insertedtechnika: technika.name });
    console.log("Inserted technika:", result);
    return result[0];
  } catch (error) {
    console.error("Error inserting technika:", error);
    throw error;
  }
}

async function insertJednotky(name: string) {
  try {
    const result = await db.insert(jednotky).values({ name }).returning();
    console.log("Inserted jednotky:", result);
    return result[0];
  } catch (error) {
    console.error("Error inserting jednotky:", error);
    throw error;
  }
}
*/
async function associateVyjezdWithTechnika(
  vyjezdId: number,
  technikaIds: number[] //Accepts an array of technikaIds
) {
  try {
    // Create an array of objects, each representing a row to insert
    const values = technikaIds.map((technikaId) => ({
      vyjezdId: vyjezdId,
      technikaId: technikaId,
    }));

    // Insert multiple rows into the vyjezdToTechnika table
    await db.insert(vyjezdToTechnika).values(values);
  } catch (error) {
    throw new Error(error as string);
  }
}

async function associateVyjezdWithJednotky(
  vyjezdId: number,
  jednotkyIds: number[] // Accepts an array of jednotkyIds
) {
  try {
    // Create an array of objects, each representing a row to insert
    const values = jednotkyIds.map((jednotkyId) => ({
      vyjezdId: vyjezdId,
      jednotkyId: jednotkyId,
    }));

    // Insert multiple rows into the vyjezdToJednotky table
    await db.insert(vyjezdToJednotky).values(values);
  } catch (error) {
    throw new Error(error as string);
  }
}

// --- Get Vyjezds Function ---

export async function getVyjezdy() {
  try {
    const vyjezds = await db.query.vyjezd.findMany({
      columns: {
        id: true,
        date: true,
        time: true,
        description: true,
        address: true,
      },
      with: {
        category: {
          // Load the associated category
          columns: {
            name: true,
          },
        },
        subcategory: {
          // Load the associated subcategory
          columns: {
            name: true,
          },
        },
        vyjezdToTechnika: {
          columns: {},
          with: {
            technika: {
              // Load technika for each vyjezdToTechnika
              columns: {
                name: true,
              },
            },
          },
        },
        vyjezdToJednotky: {
          columns: {},
          with: {
            jednotky: {
              // Load jednotky for each vyjezdToJednotky
              columns: {
                name: true,
              },
            },
          },
        },
      },
    });

    return {
      vyjezdy: vyjezds.map((vyjezd) => ({
        id: vyjezd.id,
        date: vyjezd.date,
        time: vyjezd.time,
        description: vyjezd.description,
        address: vyjezd.address,
        category: vyjezd.category?.name || null,
        subcategory: vyjezd.subcategory?.name || null,
        technika: vyjezd.vyjezdToTechnika.map(
          (technika) => technika.technika.name
        ),
        jednotky: vyjezd.vyjezdToJednotky.map(
          (jednotky) => jednotky.jednotky.name
        ),
      })),
    };
  } catch (error) {
    //console.error("Error retrieving vyjezds:", error);
    throw new Error(error as string);
  }
}

// --- Get Last three vyjezds ---

export async function getLastThreeVyjezdy() {
  try {
    const vyjezds = await db.query.vyjezd.findMany({
      orderBy: desc(vyjezd.date),
      limit: 3,
      columns: {
        id: true,
        date: true,
        time: true,
        description: true,
        address: true,
      },
      with: {
        category: {
          columns: {
            name: true,
          },
        },
        subcategory: {
          columns: {
            name: true,
          },
        },
        vyjezdToTechnika: {
          columns: {},
          with: {
            technika: {
              columns: {
                name: true,
              },
            },
          },
        },
        vyjezdToJednotky: {
          columns: {},
          with: {
            jednotky: {
              columns: {
                name: true,
              },
            },
          },
        },
      },
    });

    return {
      vyjezdy: vyjezds.map((vyjezd) => ({
        id: vyjezd.id,
        date: vyjezd.date,
        time: vyjezd.time,
        description: vyjezd.description,
        address: vyjezd.address,
        category: vyjezd.category?.name || null,
        subcategory: vyjezd.subcategory?.name || null,
        technika: vyjezd.vyjezdToTechnika.map(
          (technika) => technika.technika.name
        ),
        jednotky: vyjezd.vyjezdToJednotky.map(
          (jednotky) => jednotky.jednotky.name
        ),
      })),
    };
  } catch (error) {
    throw new Error(error as string);
  }
}

// --- Delete Vyjezd Function ---

export async function deleteVyjezd(vyjezdId: number) {
  try {
    await db.delete(vyjezd).where(eq(vyjezd.id, vyjezdId));
  } catch (error) {
    throw new Error(error as string);
  }
}

// --- Update Vyjezd Function ---
/*
export async function updateVyjezd(vyjezdId: number, vyjezd: Vyjezd) {
  try {
    await db.update(vyjezd).set().where(eq(vyjezd.id, vyjezdId));
  } catch (error) {
    throw new Error(error as string);
  }
}
*/

// --- Get Posts ---
export async function getPosts() {
  try {
    const posts = await db.query.posts.findMany({
      columns: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        author: true,
        featured: true,
        excerpt: true,
      },
      with: {
        category: {
          columns: {
            name: true,
          },
        },
      },
    });
    return {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
        date: post.createdAt.toLocaleDateString("cs-cz", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        content: post.content,
        author: post.author,
        featured: post.featured,
        excerpt: post.excerpt,
        category: post.category?.name,
      })),
    };
  } catch (error) {
    throw new Error(error as string);
  }
}
// --- Get Post By Slug ---
export async function getPostBySlug(slug: string) {
  try {
    const post = await db.query.posts.findFirst({
      where: eq(posts.slug, slug),
      columns: {
        id: true,
        slug: true,
        title: true,
        content: true,
        createdAt: true,
        author: true,
        featured: true,
        excerpt: true,
      },
      with: {
        category: {
          columns: {
            name: true,
          },
        },
      },
    });
    return post;
  } catch (error) {
    throw new Error(error as string);
  }
}
// --- Get Posts Categories ---
export async function getPostsCategories() {
  try {
    const categories = await db.query.posts_categories.findMany({
      columns: {
        id: true,
        name: true,
      },
    });
    return {
      categories: categories.map((category) => ({
        id: category.id,
        name: category.name,
      })),
    };
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function insertPost(
  title: string,
  excerpt: string,
  category: string,
  content: string,
  featured: boolean,
  author: string
) {
  try {
    // Find category id based on category name
    const categoryResult = await db.query.posts_categories.findFirst({
      where: eq(posts_categories.name, category),
    });

    if (!categoryResult) {
      throw new Error(`Category with name '${category}' not found.`);
    }

    const categoryId = categoryResult.id;

    await db
      .insert(posts)
      .values({ title, content, categoryId, featured, excerpt, author })
      .returning();
  } catch (error) {
    throw new Error(error as string);
  }
}
export async function getLastThreePosts() {
  try {
    const dbPosts = await db.query.posts.findMany({
      orderBy: desc(posts.createdAt),
      limit: 3,
      columns: {
        id: true,
        createdAt: true,
        title: true,
        content: true,
        image: true,
        author: true,
        excerpt: true,
        featured: true,
      },
      with: {
        category: {
          columns: {
            name: true,
          },
        },
      },
    });

    return {
      posts: dbPosts.map((post) => ({
        id: post.id,
        date: post.createdAt,
        category: post.category?.name || null,
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        image: post.image,
        featured: post.featured,
        author: post.author,
      })),
    };
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function deletePost(postId: number) {
  try {
    await db.delete(posts).where(eq(posts.id, postId));
  } catch (error) {
    throw new Error(error as string);
  }
}
