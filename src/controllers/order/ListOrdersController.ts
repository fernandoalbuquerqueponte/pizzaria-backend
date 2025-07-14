import type { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController {
  async handle(_req: Request, res: Response) {
    const listOrdersService = new ListOrdersService();

    const orders = await listOrdersService.execute();

    return res.json(orders);
  }
}

export { ListOrdersController };
