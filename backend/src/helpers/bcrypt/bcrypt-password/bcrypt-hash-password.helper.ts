import bcrypt from 'bcrypt';

const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

export { hashPassword };
