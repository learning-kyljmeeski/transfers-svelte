<script>
    export let transfers;
    const tableHeaders = ['Name', 'Left', 'Joined', 'Fee', ''];
</script>

<table>
    <thead>
        <tr>
            {#each tableHeaders as header}
                <th>{header}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each transfers as transfer}
            <tr>
                <td>{transfer.name}</td>
                <td>{transfer.previousClub}</td>
                <td>{transfer.newClub}</td>
                <td>{transfer.price}</td>
                <td><a href={`/transfers/${transfer.id}`}>more</a></td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
        font-family: monospace;
    }

    th, td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f2f2f2;
    }

    a {
        text-decoration: none;
        color: #007bff;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
