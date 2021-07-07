import bcrypt from 'bcrypt';

const isMatchPassword = async (reqPassword: string, dbPassword: string): Promise<boolean> => {
  return await bcrypt.compare(reqPassword, dbPassword);
};

export { isMatchPassword };
