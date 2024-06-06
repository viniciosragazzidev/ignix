const { PrismaClient } = require("@prisma/client");

const prismaSeed = new PrismaClient();

const companyUnitId = "clwz4e7yf000kprg2mvndps9o";
const userId = "clwz4bz6l000eprg2w51l5o5s";
async function main() {
  const client = await prismaSeed.unitClient.create({
    data: {
      id: "clwz4e7yf000kprg2mvndps9o", // Use o ID fornecido
      name: "Client 1",
      document: "12345678901",
      address: "123 Main St",
      city: "City Name",
      state: "State Name",
      email: "client@example.com",
      phone: "1234567890",
      companyUnitId: companyUnitId,
    },
  });

  const order = await prismaSeed.unitOrder.create({
    data: {
      client: {
        connect: { id: client.id },
      },
      orderDescription: "Order description",
      totalAmout: "100.00",
      createdBy: {
        connect: { id: userId },
      },
      CompanyUnit: {
        connect: { id: companyUnitId },
      },
    },
  });

  const orderItem = await prismaSeed.orderItem.create({
    data: {
      name: "Item 1",
      brand: "Brand 1",
      model: "Model 1",
      status: "PENDING",
      occurrenceDescription: "Occurrence description",
      unitOrderId: order.id,
    },
  });

  console.log({ order, orderItem });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaSeed.$disconnect();
  });
