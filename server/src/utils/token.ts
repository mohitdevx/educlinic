import jwt from 'jsonwebtoken';


export const generateToken = ({id, role}: {id: number, role: string}): string => {
  try {
    const token = jwt.sign(
      { id: id, role: role },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: '1d' }
    );
    return token;
  } catch (err) {
    console.log(err);
    throw err;
  }
};