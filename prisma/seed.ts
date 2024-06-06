const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const companyUnitId = "clwz4e7yf000kprg2mvndps9o";
const userId = "clwz4bz6l000eprg2w51l5o5s";
console.log({ companyUnitId, userId });

async function main() {
  const client = await db.unitClient.create({
    data: {
      name: "Client 11",
      document: "11000000000",
      address: "123 Main St",
      city: "City Name",
      state: "State Name",
      email: "client@example.com",
      phone: "21999999999",
      companyUnitId: companyUnitId,
    },
  });

  const order = await db.unitOrder.create({
    data: {
      client: {
        connect: { id: client.id },
      },
      orderDescription: "Order description 10",
      status: "FINALIZATE",
      totalAmout: "",
      createdBy: {
        connect: { id: userId },
      },
      CompanyUnit: {
        connect: { id: companyUnitId },
      },
    },
  });

  const orderItem = await db.orderItem.createMany({
    data: [
      {
        name: "Item 11",
        brand: "Brand",
        model: "Model 1",
        status: "PENDING",
        occurrenceDescription: "Occurrence description",
        unitOrderId: order.id,
      },
      {
        name: "Item 2",
        brand: "Brand 3",
        model: "Model 1",
        status: "PENDING",
        occurrenceDescription: "Occurrence description",
        unitOrderId: order.id,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
