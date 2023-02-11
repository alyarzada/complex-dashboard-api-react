import React from 'react';
import ResponsiveTable from "material-ui-next-responsive-table";

const ResponsivePagination = ({data,columns,page}) => {
    return (
        <div>
            <ResponsiveTable
                data={data.slice((page-1)*10,(page)*10)}
                columns={columns}
            />
        </div>
    );
}

export default ResponsivePagination;
