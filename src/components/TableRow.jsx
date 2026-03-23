function TableRow({ classNameTd, classNameSpan, childrenA, childrenB, childrenC, childrenD }) {
  return (
    <tr>
      <td className={classNameTd}>{childrenA}</td>
      <td className={classNameTd}>{childrenB}</td>
      <td className={classNameTd}>
        <span className={classNameSpan}>{childrenC}</span>
      </td>
      <td className={classNameTd}>
        <span className={classNameSpan}>{childrenD}</span>
      </td>
    </tr>
  );
}

export default TableRow;
