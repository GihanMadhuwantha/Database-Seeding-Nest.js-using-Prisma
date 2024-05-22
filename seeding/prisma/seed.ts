import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.product.createMany({
      data: [
        
        { name: 'Product 1', description: 'Description for Product 1', price: 10.99 },
        { name: 'Product 2', description: 'Description for Product 2', price: 20.99 },
        { name: 'Product 3', description: 'Description for Product 3', price: 15.49 },
        { name: 'Product 4', description: 'Description for Product 4', price: 25.79 },
        { name: 'Product 5', description: 'Description for Product 5', price: 30.00 },
        { name: 'Product 6', description: 'Description for Product 6', price: 12.49 },
        { name: 'Product 7', description: 'Description for Product 7', price: 18.99 },
        { name: 'Product 8', description: 'Description for Product 8', price: 22.99 },
        { name: 'Product 9', description: 'Description for Product 9', price: 19.99 },
        { name: 'Product 10', description: 'Description for Product 10', price: 8.99 },

      ],
    });
    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
