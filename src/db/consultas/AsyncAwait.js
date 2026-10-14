const sql = require('mssql/msnodesqlv8');
const config = require('../config/Configuracion');

(async function () {
    try {
        let pool = await sql.connect(config);
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, 2)
            .query('select campo from prueba_uno where campo = @input_parameter');

        console.log("Ejecutado mediante SELECT");
        console.dir(result1);
        

        // Stored procedure
        let result2 = await pool.request()
            .input('CampoEntrada', sql.Int, 3)
            .output('CampoSalida', sql.Int)
            .execute('SP_OBTENER_VALOR')

        console.log("Ejecutado mediante SP");
        console.dir(result2)
    } catch (err) {
        console.error(err);
        // ... error checks
    }
})();
/*
sql.on('error', err => {
    // ... error handler
});
*/