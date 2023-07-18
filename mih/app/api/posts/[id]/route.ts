import { NextResponse } from "next/server"
import {headers,cookies} from 'next/headers'
import {redirect} from 'next/navigation'

export async function DELETE(req:Request,{params}:{params:{id:string}}){
  const id = params.id

  const headerList  = headers()
  const type = headerList.get('Content-Type')
  let cookiesList = cookies().set("cooka",'kcdskckdvkdvsl')
  const coo2 = cookies().get('cooka')?.value

//   redirect('/blog')

  return NextResponse.json({id,type,coo2})
}