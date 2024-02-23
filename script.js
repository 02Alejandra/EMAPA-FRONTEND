//CONSULTA N°1
async function validaUsuario() {
  const usuario = "Mutualista"; // Usa el usuario proporcionado
  const password = "mutualista2022"; // Usa la contraseña proporcionada
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_USUARIO_VALIDA_CLAVE";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_USUARIO_VALIDA_CLAVE>
            <web:usuario>${usuario}</web:usuario>
            <web:password>${password}</web:password>
          </web:SP_WS_USUARIO_VALIDA_CLAVE>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    // Aquí deberás procesar la respuesta del servicio web.
    console.log(text);
  } catch (error) {
    console.error("Error al validar el usuario:", error);
  }
}

//CONSULTA N°2
async function datosUsuario(nombreUsuario) {
  const url = "http://186.42.112.70:8094/principal.asmx/SP_WS_DATOS_USUARIO";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_DATOS_USUARIO>
            <web:usuario>${nombreUsuario}</web:usuario>
          </web:SP_WS_DATOS_USUARIO>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
  }
}

//CONSULTA N°3
async function consultaCliente(tipoBusqueda, parametroBusqueda) {
  const url = "http://186.42.112.70:8094/principal.asmx/SP_WS_CONSULTA_CLIENTE";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_CONSULTA_CLIENTE>
            <web:tipoBusqueda>${tipoBusqueda}</web:tipoBusqueda>
            <web:parametroBusqueda>${parametroBusqueda}</web:parametroBusqueda>
          </web:SP_WS_CONSULTA_CLIENTE>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en la consulta del cliente:", error);
  }
}

//CONSULTA N°4
async function consultaFacturasCliente(cueId) {
  //const corsAnywhereURL = 'https://cors-anywhere.herokuapp.com/';
  const serviceURL = "http://186.42.112.70:8094/principal.asmx";

  //const url = corsAnywhereURL + serviceURL;

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_FACTURAS_CLIENTE>
            <web:cueId>${cueId}</web:cueId>
          </web:SP_WS_FACTURAS_CLIENTE>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
        SOAPAction: "http://tempuri.org/SP_WS_FACTURAS_CLIENTE",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en la consulta de facturas del cliente:", error);
  }
}

//CONSULTA N°5
async function consultaFacturasClienteDataset(cueId) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_FACTURAS_CLIENTE_DATSET";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_FACTURAS_CLIENTE_DATSET>
            <web:cueId>${cueId}</web:cueId>
          </web:SP_WS_FACTURAS_CLIENTE_DATSET>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });
    console.log("esto es un response");

    console.log(response);
    console.log("**************");

    if (!response.ok) {
      console.log("esto es un error");
      console.log(response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();

    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error(
      "Error en la consulta de facturas del cliente (Dataset):",
      error
    );
  }
}

//CONSULTA N°6
async function realizarConsultaDetalleFacturas(cueId) {
    console.log("Esto es la función realizarConsultaDetalleFacturas");
    const url = "http://127.0.0.1:3000/api/principal.asmx";

    const soapEnvelope = `
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <SP_WS_FACTURAS_CLIENTE xmlns="http://tempuri.org/">
        <LN_CUE_ID>${cueId}</LN_CUE_ID>
      </SP_WS_FACTURAS_CLIENTE>
    </soap:Body>
  </soap:Envelope>
  
    `;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/xml;charset=utf-8",
          "SOAPAction": "http://tempuri.org/SP_WS_FACTURAS_CLIENTE"
        },
        body: soapEnvelope,
      });

      console.log("Esto es un response:", response);
      if (!response.ok) {
        console.log("Esto es un error");
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Esto es esta bien");
      const text = await response.text();
      console.log("Esto es una respuesta:", text);


const parser = new DOMParser();
const xmlDoc = parser.parseFromString(text, "text/xml");

const tables = xmlDoc.getElementsByTagName("Table");

if (tables.length > 0) {
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const fsrId = table.getElementsByTagName("FSR_ID")[0].textContent;
        const fsrNumeroCompleto = table.getElementsByTagName("FSR_NUMERO_COMPLETO")[0].textContent;
        console.log(`FSR_ID: ${fsrId}, FSR_NUMERO_COMPLETO: ${fsrNumeroCompleto}`);
        //colocar los demas uwu
    }
} else {
    console.log("No se encontraron datos en la tabla.");
}


    } catch (error) {
      console.error("Error en la consulta del detalle de facturas del cliente:", error);
    }
}




//CONSULTA N°7
async function procesoFacturacion(
  cueId,
  recaudador,
  formaPago,
  banco,
  cuenta,
  numeroCheque,
  beneficiario,
  observacion
) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_PROCESO_FACTURACION_INT";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_PROCESO_FACTURACION_INT>
            <web:cueId>${cueId}</web:cueId>
            <web:recaudador>${recaudador}</web:recaudador>
            <web:formaPago>${formaPago}</web:formaPago>
            <web:banco>${banco}</web:banco>
            <web:cuenta>${cuenta}</web:cuenta>
            <web:numeroCheque>${numeroCheque}</web:numeroCheque>
            <web:beneficiario>${beneficiario}</web:beneficiario>
            <web:observacion>${observacion}</web:observacion>
          </web:SP_WS_PROCESO_FACTURACION_INT>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en el proceso de facturación:", error);
  }
}

//CONSULTA N°8
async function procesoFacturacionSeleccion(
  cueId,
  recaudador,
  numFacturas,
  parametro,
  ...otrosParametros
) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_PROCESO_FACTURACION_SELECCION";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_PROCESO_FACTURACION_SELECCION>
            <web:cueId>${cueId}</web:cueId>
            <web:recaudador>${recaudador}</web:recaudador>
            <web:numFacturas>${numFacturas}</web:numFacturas>
            <web:parametro>${parametro}</web:parametro>
            <!-- Incluye otros parámetros según sean necesarios -->
          </web:SP_WS_PROCESO_FACTURACION_SELECCION>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en el proceso de facturación de selección:", error);
  }
}

//CONSULTA N°9
async function consultaFacturasProcesadas(freId) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_CONSULTA_FACTURAS_PROCESADAS";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_CONSULTA_FACTURAS_PROCESADAS>
            <web:freId>${freId}</web:freId>
          </web:SP_WS_CONSULTA_FACTURAS_PROCESADAS>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en la consulta de facturas procesadas:", error);
  }
}

//CONSULTA N°10
async function consultaFacturaProcesada(fsrId) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_CONSULTA_FACTURA_PROCESADA";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_CONSULTA_FACTURA_PROCESADA>
            <web:fsrId>${fsrId}</web:fsrId>
          </web:SP_WS_CONSULTA_FACTURA_PROCESADA>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en la consulta de factura procesada:", error);
  }
}

//CONSULTA N°11
async function reversoTransacciones(freId, recaudador) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_REVERSO_TRANSACCIONES_INT";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_REVERSO_TRANSACCIONES_INT>
            <web:freId>${freId}</web:freId>
            <web:recaudador>${recaudador}</web:recaudador>
          </web:SP_WS_REVERSO_TRANSACCIONES_INT>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en el reverso de transacciones:", error);
  }
}

//CONSULTA N°12
async function reporteTransaccionesRV(
  recaudador,
  fechaDesde,
  fechaHasta,
  filtro
) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_REPORTE_TRANSACCIONES_RV";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_REPORTE_TRANSACCIONES_RV>
            <web:recaudador>${recaudador}</web:recaudador>
            <web:fechaDesde>${fechaDesde}</web:fechaDesde>
            <web:fechaHasta>${fechaHasta}</web:fechaHasta>
            <web:filtro>${filtro}</web:filtro>
          </web:SP_WS_REPORTE_TRANSACCIONES_RV>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en el reporte de transacciones:", error);
  }
}

//CONSULTA N°13
async function reimpresionComprobante(lnFreId, liFiltro) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_REIMPRESION_COMPROBANTE";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_REIMPRESION_COMPROBANTE>
            <web:LN_FRE_ID>${lnFreId}</web:LN_FRE_ID>
            <web:LI_FILTRO>${liFiltro}</web:LI_FILTRO>
          </web:SP_WS_REIMPRESION_COMPROBANTE>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en la reimpresión de comprobante:", error);
  }
}

//CONSULTA N°14
async function registrarFormaPago(liTipoFPago) {
  const url = "http://186.42.112.70:8094/principal.asmx/NOMBRE_DEL_METODO";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:NOMBRE_DEL_METODO>
            <web:LI_TIPO_F_PAGO>${liTipoFPago}</web:LI_TIPO_F_PAGO>
          </web:NOMBRE_DEL_METODO>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error en el registro de forma de pago:", error);
  }
}

//CONSULTA N°15
async function asignarOpcionMenu(lsUsrUser) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_USUARIO_FACTURACION";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_USUARIO_FACTURACION>
            <web:LS_USR_USER>${lsUsrUser}</web:LS_USR_USER>
          </web:SP_WS_USUARIO_FACTURACION>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error al asignar opción de menú:", error);
  }
}

//CONSULTA N°16
async function obtenerFacturasCliente(lnCueId, lsFacRecaudador, lnFsrId) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_FACTURAS_CLIENTE_FAC_NUM";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_FACTURAS_CLIENTE_FAC_NUM>
            <web:LN_CUE_ID>${lnCueId}</web:LN_CUE_ID>
            <web:LS_FAC_RECAUDADOR>${lsFacRecaudador}</web:LS_FAC_RECAUDADOR>
            <web:LN_FSR_ID>${lnFsrId}</web:LN_FSR_ID>
          </web:SP_WS_FACTURAS_CLIENTE_FAC_NUM>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error al obtener facturas del cliente:", error);
  }
}

//CONSULTA N°17
async function asignarOpcionMenu(
  lsUsrAutoriza,
  lsUsrAutorizado,
  lfCueId,
  lsFsrId,
  lfTotal,
  liFiltro
) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_ASIGNAR_OPCION_MENU";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_ASIGNAR_OPCION_MENU>
            <web:LS_USR_AUTORIZA>${lsUsrAutoriza}</web:LS_USR_AUTORIZA>
            <web:LS_USR_AUTORIZADO>${lsUsrAutorizado}</web:LS_USR_AUTORIZADO>
            <web:LF_CUE_ID>${lfCueId}</web:LF_CUE_ID>
            <web:LS_FSR_ID>${lsFsrId}</web:LS_FSR_ID>
            <web:LF_TOTAL>${lfTotal}</web:LF_TOTAL>
            <web:LI_FILTRO>${liFiltro}</web:LI_FILTRO>
          </web:SP_WS_ASIGNAR_OPCION_MENU>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error al asignar opción de menú:", error);
  }
}

//CONSULTA N°18
async function obtenerUsuarioAutorizado() {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_USUARIO_AUTORIZADO";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_USUARIO_AUTORIZADO/>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error al obtener información de usuario autorizado:", error);
  }
}

//CONSULTA N°19
async function obtenerFacturasClienteAutorizadas(glsFacRecaudador, glnCueId) {
  const url =
    "http://186.42.112.70:8094/principal.asmx/SP_WS_FACTURAS_CLIENTE_AUTORIZADAS";

  const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:SP_WS_FACTURAS_CLIENTE_AUTORIZADAS>
            <web:GLS_FAC_RECAUDADOR>${glsFacRecaudador}</web:GLS_FAC_RECAUDADOR>
            <web:GLN_CUE_ID>${glnCueId}</web:GLN_CUE_ID>
          </web:SP_WS_FACTURAS_CLIENTE_AUTORIZADAS>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log(text);
    // Procesar la respuesta aquí
  } catch (error) {
    console.error("Error al obtener facturas autorizadas del cliente:", error);
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   window.realizarConsultaDetalleFacturas = async function (cueId) {

 
//   };
// });
