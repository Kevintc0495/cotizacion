import React from "react";
import "./modal.scss";

interface modal {
  open: boolean;
  handleClose: () => void;
  heightContain: number;
  reference: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const Modal = ({
  open,
  handleClose,
  heightContain,
  reference,
  children,
}: modal) => {
  return (
    <>
      <div
        className={`modal__layer ${open ? "modal--view " : ""}`}
        onClick={handleClose}
      ></div>
      <div
        className={`modal__contain ${open ? "modal--view " : ""}`}
        ref={reference}
        style={{ top: `calc(50% - ${heightContain / 2}px` }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;

// <div
//           className={`layer__modal ${openModal ? "table--view " : ""}`}
//           onClick={handleCloseModal}
//         ></div>
//         <div
//           className={`table__modal ${openModal ? "table--view " : ""}`}
//           ref={tableRef}
//           style={{ top: `calc(50% - ${(heightTable / 2).toString()}px` }}
//         >
//           <article className="table__container">
//             <TableContainer component={Paper}>
//               <Table
//                 sx={{ minWidth: 600 }}
//                 aria-label="simple table"
//                 size="small"
//               >
//                 <TableHead className="table__container__table__head">
//                   <TableRow>
//                     <TableCell align="center" style={{ color: "white" }}>
//                       Cant.
//                     </TableCell>
//                     <TableCell align="center" style={{ color: "white" }}>
//                       Descripcion
//                     </TableCell>
//                     <TableCell align="center" style={{ color: "white" }}>
//                       Costo
//                     </TableCell>
//                     <TableCell align="center" style={{ color: "white" }}>
//                       Total
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {rows.map((row, i) => (
//                     <TableRow
//                       key={i}
//                       sx={{
//                         "&:last-child td, &:last-child th": { border: 0 },
//                       }}
//                       onClick={() => handleOpenModalChild(row, i)}
//                     >
//                       <TableCell align="center">{row.quantity}</TableCell>
//                       <TableCell align="left">{row.description}</TableCell>
//                       <TableCell align="left">
//                         {row.unitPrice.toFixed(2)}
//                       </TableCell>
//                       <TableCell align="center">
//                         {(row.quantity * row.unitPrice).toFixed(2)}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </article>
//            <article className="table__container">
//             <TableContainer component={Paper}>
//               <Table
//                 sx={{ minWidth: 600 }}
//                 aria-label="simple table"
//                 size="small"
//               >
//                 <TableHead className="table__container__table__head">
//                   <TableRow>
//                     <TableCell align="center" style={{ color: "white" }}>
//                       Cant.
//                     </TableCell>
//                     <TableCell align="center" style={{ color: "white" }}>
//                       Descripcion
//                     </TableCell>
//                     <TableCell align="center" style={{ color: "white" }}>
//                       Unidad
//                     </TableCell>
//                     <TableCell align="center" style={{ color: "white" }}>
//                       Precio
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {rows2.map((row, i) => (
//                     <TableRow
//                       key={i}
//                       sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                     >
//                       <TableCell align="center">{row.quantity}</TableCell>
//                       <TableCell align="left">{row.description}</TableCell>
//                       <TableCell align="center">{row.unit}</TableCell>
//                       <TableCell align="left">
//                         {row.unitPrice.toFixed(2)}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//         </article>
//         </div>
