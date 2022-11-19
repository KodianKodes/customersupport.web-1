import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../styles/AgentRecordings.module.scss";
import Icon from "../assets/table-icon.png";

export default function BasicTable() {
  function createData(name, length, size, uploaded) {
    return { name, length, size, uploaded };
  }

  const rows = [
    createData(
      {
        title: "Recording1name.mp3",
        description: "Inactive recharge card, line barred",
      },
      "4 mins",
      "50mb",
      "13/11/22"
    ),
    createData(
      {
        title: "Recording1name.mp3",
        description: "Inactive recharge card, line barred",
      },
      "4 mins",
      "50mb",
      "13/11/22"
    ),
    createData(
      {
        title: "Recording1name.mp3",
        description: "Inactive recharge card, line barred",
      },
      "4 mins",
      "50mb",
      "13/11/22"
    ),
    createData(
      {
        title: "Recording1name.mp3",
        description: "Inactive recharge card, line barred",
      },
      "4 mins",
      "50mb",
      "13/11/22"
    ),
  ];
  return (
    <TableContainer component={Paper} className={styles.plainTable}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Length</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Uploaded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      height: "50",
                      width: "50",
                      backgroundColor: "#F1FAFA",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      padding: "8px",
                      marginRight: "15px",
                    }}
                  >
                    <img
                      src={Icon}
                      alt="icon"
                      style={{ height: "35", width: "35" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "gray-400",
                        fontStyle: "inherit",
                      }}
                    >
                      {row.name.title}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "gray-400",
                        fontStyle: "inherit",
                      }}
                    >
                      {row.name.description}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell align="right">{row.length}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.uploaded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
