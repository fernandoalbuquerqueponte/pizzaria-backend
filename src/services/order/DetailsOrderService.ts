import prismaClient from "../../prisma";

interface DetailsOrderRequest {
  order_id: string;
}

class DetailsOrderService {
  async execute({ order_id }: DetailsOrderRequest) {
    const orders = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        order: true,
        product: true,
      },
    });

    return orders;
  }
}

export { DetailsOrderService };
