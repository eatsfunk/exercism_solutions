export class Matrix {
  constructor(string) {
        this.string = string;
        this._rows = this.getRows();
        this._columns = this.getColumns();
    }

    get rows() { return this._rows }

    get columns() { return this._columns}

    getRows() {
        let rows = [];
        this.string.split('\n').forEach((row) => {
            let rowArr = row.split(' ');
            rows.push(rowArr.map((el) => 1 * el));
        })
        return rows;
    }

    getColumns() {
        let columns = [];
        let col = [];
        for (let i = 0; i < this._rows[0].length; i++) {
            for (let j = 0; j < this._rows.length; j++) {
                col.push(1 * this._rows[j][i]);
            }
            columns.push(col);
            col = [];
        }
        return columns;
    }
}
