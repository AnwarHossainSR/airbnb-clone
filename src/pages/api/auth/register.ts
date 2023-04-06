import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/lib/prismadb';
import { logInfo } from '@/utils/logger';
import {
  CatchAsyncErrors,
  ErrorHandler,
} from '@/utils/server/middleware/errorHandle';
import valid from '@/utils/validations/userValidation';

const register = CatchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { name, email, password } = req.body;

      const errMsg = valid(name, email, password);

      if (errMsg) throw new ErrorHandler(errMsg, 400);

      const userExist = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (userExist) throw new ErrorHandler('User already exists', 400);

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          hashedPassword,
        },
      });

      return res.status(200).json({ message: 'Register Success!', user });
    } catch (err: any) {
      logInfo(`register-error: ${err}`);
      return res.status(500).json({ err: err.message });
    }
  }
);

export default CatchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
      case 'POST':
        await register(req, res);
        break;
      default:
        res.status(405).json({ err: 'Method not allowed' });
    }
  }
);
