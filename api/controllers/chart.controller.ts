import { Request, Response } from 'express';
import { getCharts } from '../services/chart.service';

export const getChartsController = async (req: Request, res: Response) => {
  try {
    const user = await getCharts();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Failed to get charts info' });
  }
};

