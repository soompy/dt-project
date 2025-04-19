const Table = ({ data }) => {
    if (!data || data.length === 0) return <p>데이터가 없음</p>;

    const headers = Object.keys(data[0]);

    return (
        <table border="1" cellPadding="8">
            <thead>
                <tr>
                    {headers.map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i}>
                        {headers.map((key) => (
                            <td key={key}>{row[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
