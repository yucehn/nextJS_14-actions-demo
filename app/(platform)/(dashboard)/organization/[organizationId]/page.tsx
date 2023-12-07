import { Separator } from "@/components/ui/separator";
import Info from "./_components/info";
import { BoardList } from "./_components/board-list";


const OrganizationIdPage = async ()=>{
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  )
}


export default OrganizationIdPage;

// import { db } from "@/lib/db";
// import { Board } from "./board";
// import { Form } from "./form";

// const OrganizationIdPage = async ()=>{
//   const boards = await db.board.findMany();
//   return (
//     <div className="flex flex-col space-y-4">
//       <Form />
//       <div className="space-y-2">
//         {boards.map((board)=>(
//           <Board key={board.id} id={board.id} title={board.title} />
//         ))}
//       </div>
//     </div>
//   )
// }



// import { OrganizationSwitcher, auth } from "@clerk/nextjs";

// const OrganizationIdPage = ()=>{
//   const { userId, orgId } = auth();
//   return (
//     <div>
//       organization: { orgId }

//       <OrganizationSwitcher hidePersonal/>
//     </div>
//   )
// }