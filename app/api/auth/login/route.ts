import { NextRequest, NextResponse } from 'next/server';

// Simulated user credentials (You should ideally use a database)
const users = [
  { email: 'sarower.du@gmail.com', password: '123456' },
];

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    // Send a response indicating the login is successful
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } else {
    // Return an error if the credentials are incorrect
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
  }
}
