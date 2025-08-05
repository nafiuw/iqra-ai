import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'Iqra AI is running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  })
}
