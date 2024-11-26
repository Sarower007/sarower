// app/api/items/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';

interface Item {
  name: string;
}

export async function GET() {
  const { db } = await connectToDatabase();
  const collection = db.collection('items');
  const items = await collection.find({}).toArray();

  return NextResponse.json(items, {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const { db } = await connectToDatabase();
  const { name }: Item = await req.json();
  const collection = db.collection('items');
  const newItem = await collection.insertOne({ name });

  return NextResponse.json(newItem.ops[0], {
    status: 201,
  });
}

export async function PUT(req: NextRequest) {
  const { db } = await connectToDatabase();
  const { _id, name }: { _id: string; name: string } = await req.json();
  const collection = db.collection('items');
  const updatedItem = await collection.updateOne(
    { _id },
    { $set: { name } }
  );

  return NextResponse.json(updatedItem, {
    status: 200,
  });
}

export async function DELETE(req: NextRequest) {
  const { db } = await connectToDatabase();
  const { _id }: { _id: string } = await req.json();
  const collection = db.collection('items');
  const deleteResult = await collection.deleteOne({ _id });

  return NextResponse.json(deleteResult, {
    status: 200,
  });
}
