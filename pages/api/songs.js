// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma.js';

export default async function handler(req, res) {
  const songs = await prisma.song.findMany();

  // TODO load songs
  res.status(200).json(songs);
}
