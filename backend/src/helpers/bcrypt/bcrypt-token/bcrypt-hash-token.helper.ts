import { createHash } from 'crypto';

const hashToken = (data: string): string => {
  return createHash('sha256').update(data).digest('hex');
};

export { hashToken };
