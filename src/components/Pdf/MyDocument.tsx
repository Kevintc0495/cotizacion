import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../assets/img/logoPdf.png";
import { FC } from "react";
import {
  DataBusinessAndClientProps,
  HeadBoardProps,
  InformationProps,
  MyDocumentProps,
  ServiceDetailProps,
  TableMaterialProps,
  TableServiceProps,
} from "../../interface/pdf";

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  headBoard: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headBoard__logo: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  headBoard__data: {
    width: "50%",
    alignItems: "flex-end",
  },
  headBoard__data__title: {
    width: 250,
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
  headBoard__data__quotation: {
    width: 250,
    marginTop: 10,
  },
  headBoard__data__quotation__box: {
    flexDirection: "row",
    fontSize: 11,
    justifyContent: "center",
  },
  headBoard__data__quotation__box__key: {
    width: "30%",
  },
  headBoard__data__quotation__box__value: {
    width: "30%",
  },
  dataBox: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataBox__business: {
    width: "49%",
    borderColor: "black",
    borderStyle: "solid",
    border: 1,
    paddingBottom: 5,
  },
  dataBox__title: {
    textAlign: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderBottom: 1,
    fontSize: 9,
    paddingVertical: 2,
    marginBottom: 5,
    backgroundColor: "#ebebeb",
  },
  dataBox__box: {
    flexDirection: "row",
    fontSize: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  box__key: {
    width: "28%",
  },
  box__value: {
    width: "70%",
  },
  dataBox__client: {
    width: "49%",
    borderColor: "black",
    borderStyle: "solid",
    border: 1,
    paddingBottom: 5,
  },
  serviceDetail: {
    width: "100%",
    marginTop: 20,
    fontSize: 11,
    textAlign: "justify",
  },
  table: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderTop: 1,
    textAlign: "center",
    marginTop: 20,
  },
  tableService__header: {
    flexDirection: "row",
    fontSize: 9,
    fontWeight: 600,
    backgroundColor: "#ebebeb",
  },
  tableService__header__quantity: {
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    width: "9%",
    paddingVertical: 2,
  },
  tableService__header__description: {
    borderRight: "1px solid black",
    width: "68%",
    paddingVertical: 2,
  },
  tableMaterial__header__description: {
    borderRight: "1px solid black",
    width: "57%",
    paddingVertical: 2,
  },
  tableService__header__unitPrice: {
    borderRight: "1px solid black",
    width: "11%",
    paddingVertical: 2,
  },
  tableService__header__total: {
    borderRight: "1px solid black",
    width: "12%",
    paddingVertical: 2,
  },
  tableService__body: {
    flexDirection: "row",
    fontSize: 11,
  },
  tableService__body__quantity: {
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    width: "9%",
    paddingVertical: 2,
    justifyContent: "center",
  },
  tableService__body__description: {
    borderRight: "1px solid black",
    width: "68%",
    paddingVertical: 2,
    textAlign: "left",
    paddingLeft: 2,
  },
  tableMaterial__body__description: {
    borderRight: "1px solid black",
    width: "57%",
    paddingVertical: 2,
    textAlign: "left",
    paddingLeft: 2,
  },
  tableService__body__unitPrice: {
    borderRight: "1px solid black",
    width: "11%",
    paddingVertical: 2,
    justifyContent: "center",
  },
  tableService__body__total: {
    borderRight: "1px solid black",
    width: "12%",
    paddingVertical: 2,
    justifyContent: "center",
  },
  tableService__footer__total: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderTop: 1,
    textAlign: "center",
    flexDirection: "row",
    fontSize: 11,
  },
  tableService__footer__empy: {
    width: "77%",
    borderStyle: "solid",
    borderColor: "black",
    borderRight: 1,
  },
  tableService__footer__text: {
    width: "11%",
    borderStyle: "solid",
    borderColor: "black",
    borderRight: 1,
    borderBottom: 1,
    paddingVertical: 2,
  },
  tableService__footer__value: {
    width: "12%",
    borderStyle: "solid",
    borderColor: "black",
    borderRight: 1,
    borderBottom: 1,
    paddingVertical: 2,
  },
  information: {
    width: "100%",
    marginTop: 20,
    fontSize: 11,
  },
  information__farewall: {
    marginTop: 30,
  },
  information__box: {
    marginTop: 50,
    fontWeight: "bold",
  },
});

const MyDocument: FC<MyDocumentProps> = ({
  homeFormData,
  clientFormData,
  tableFormData,
  listService,
  listMaterial,
  totalPriceTableService,
  totalPriceTableMaterial,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <HeadBoard
          date={homeFormData.date}
          ruc={homeFormData.ruc}
          totalPrice={
            (tableFormData.switchEnableTableService
              ? totalPriceTableService
              : 0) +
            (tableFormData.switchEnableTableMaterial
              ? totalPriceTableMaterial
              : 0)
          }
        />
        <DataBusinessAndClient
          homeFormData={homeFormData}
          clientFormData={clientFormData}
        />
        <ServiceDetail description={homeFormData.service_description} />
        {tableFormData.switchEnableTableService && (
          <TableService
            listService={listService}
            totalPriceTableService={totalPriceTableService}
          />
        )}
        {tableFormData.switchEnableTableMaterial && (
          <TableMaterial
            listMaterial={listMaterial}
            totalPriceTableMaterial={totalPriceTableMaterial}
          />
        )}
        <Information
          name={homeFormData.name}
          ruc={homeFormData.ruc}
          note={homeFormData.note}
        />
      </Page>
    </Document>
  );
};

const HeadBoard = ({ date, ruc, totalPrice }: HeadBoardProps) => {
  return (
    <View style={styles.headBoard}>
      <View style={styles.headBoard__logo}>
        <Image src={logo} />
      </View>
      <View style={styles.headBoard__data}>
        <Text style={styles.headBoard__data__title}>Cotizacion</Text>
        <View style={styles.headBoard__data__quotation}>
          <View style={styles.headBoard__data__quotation__box}>
            <Text style={styles.headBoard__data__quotation__box__key}>
              Fecha
            </Text>
            <Text style={styles.headBoard__data__quotation__box__value}>
              {`:  ${date}`}
            </Text>
          </View>
          <View style={styles.headBoard__data__quotation__box}>
            <Text style={styles.headBoard__data__quotation__box__key}>RUC</Text>
            <Text style={styles.headBoard__data__quotation__box__value}>
              {`:  ${ruc ? ruc : "10159525339"}`}
            </Text>
          </View>
          <View style={styles.headBoard__data__quotation__box}>
            <Text style={styles.headBoard__data__quotation__box__key}>
              Precio Total
            </Text>
            <Text style={styles.headBoard__data__quotation__box__value}>
              {`:  S/ ${totalPrice.toFixed(2)}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const DataBusinessAndClient = ({
  homeFormData,
  clientFormData,
}: DataBusinessAndClientProps) => {
  const { name, business_name, address, cell_phone, mail, bank_account } =
    homeFormData;

  return (
    <View style={styles.dataBox}>
      <View style={styles.dataBox__business}>
        <Text style={styles.dataBox__title}>EMPRESA</Text>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Nombre</Text>
          <Text style={styles.box__value}>{`:  ${
            name ? name : "Jorge Ernesto Torres Medrano"
          }`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Razon Social</Text>
          <Text style={styles.box__value}>{`:  ${
            business_name ? business_name : "Multiservicios y Repuestos Jorge"
          }`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Direccion</Text>
          <Text style={styles.box__value}>
            {`:  ${
              address ? address : "cll. La huaquilla #456 int. D 2do piso."
            }`}
          </Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Telefono</Text>
          <Text style={styles.box__value}>{`:  ${
            cell_phone ? cell_phone : "988340098"
          }`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Email</Text>
          <Text style={styles.box__value}>{`:  ${
            mail ? mail : "cheche6481@gmail.com"
          }`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Cuenta BCP</Text>
          <Text style={styles.box__value}>{`:  ${
            bank_account ? bank_account : "370-37907065-015"
          }`}</Text>
        </View>
      </View>
      <View style={styles.dataBox__client}>
        <Text style={styles.dataBox__title}>CLIENTE</Text>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Nombre</Text>
          <Text style={styles.box__value}>{`:  ${clientFormData.name}`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Razon Social</Text>
          <Text
            style={styles.box__value}
          >{`:  ${clientFormData.business_name}`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>RUC</Text>
          <Text style={styles.box__value}>{`:  ${clientFormData.ruc}`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Direccion</Text>
          <Text
            style={styles.box__value}
          >{`:  ${clientFormData.address}`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Telefono</Text>
          <Text
            style={styles.box__value}
          >{`:  ${clientFormData.cell_phone}`}</Text>
        </View>
        <View style={styles.dataBox__box}>
          <Text style={styles.box__key}>Email</Text>
          <Text style={styles.box__value}>{`:  ${clientFormData.mail}`}</Text>
        </View>
      </View>
    </View>
  );
};

const ServiceDetail = ({ description }: ServiceDetailProps) => {
  let serviceDetailDefault = `Estimada Señor(a). 

  En atención al servicio solicitado por UD., sírvase tomar conocimiento de la siguiente cotización por los servicios de instalación eléctrica:`;

  return (
    <View style={styles.serviceDetail}>
      <Text>{description ? description : serviceDetailDefault}</Text>
    </View>
  );
};

const TableService = ({
  listService,
  totalPriceTableService,
}: TableServiceProps) => {
  return (
    <View style={styles.table} wrap={false}>
      <View style={styles.tableService__header}>
        <Text style={styles.tableService__header__quantity}>CANT.</Text>
        <Text style={styles.tableService__header__description}>
          DESCRIPCION
        </Text>
        <Text style={styles.tableService__header__unitPrice}>C/U</Text>
        <Text style={styles.tableService__header__total}>TOTAL</Text>
      </View>
      {listService.map((item, i) => (
        <View key={i} style={styles.tableService__body}>
          <View style={styles.tableService__body__quantity}>
            <Text>{item.quantity}</Text>
          </View>
          <View style={styles.tableService__body__description}>
            <Text>{item.description}</Text>
          </View>
          <View style={styles.tableService__body__unitPrice}>
            <Text>{"S/ " + item.unitPrice.toFixed(2)}</Text>
          </View>
          <View style={styles.tableService__body__total}>
            <Text>{"S/ " + (item.quantity * item.unitPrice).toFixed(2)}</Text>
          </View>
        </View>
      ))}
      <view style={styles.tableService__footer__total}>
        {listService.length > 0 && (
          <>
            <View style={styles.tableService__footer__empy}></View>
            <View style={styles.tableService__footer__text}>
              <Text>Total</Text>
            </View>
            <View style={styles.tableService__footer__value}>
              <Text>{`S/ ${totalPriceTableService.toFixed(2)}`}</Text>
            </View>
          </>
        )}
      </view>
    </View>
  );
};

const TableMaterial = ({
  listMaterial,
  totalPriceTableMaterial,
}: TableMaterialProps) => {
  return (
    <View style={styles.table} wrap={false}>
      <View style={styles.tableService__header}>
        <Text style={styles.tableService__header__quantity}>CANT.</Text>
        <Text style={styles.tableMaterial__header__description}>
          DESCRIPCION
        </Text>
        <Text style={styles.tableService__header__unitPrice}>UNIDAD</Text>
        <Text style={styles.tableService__header__unitPrice}>PRECIO</Text>
        <Text style={styles.tableService__header__total}>TOTAL</Text>
      </View>
      {listMaterial.map((item, i) => (
        <View key={i} style={styles.tableService__body}>
          <View style={styles.tableService__body__quantity}>
            <Text>{item.quantity}</Text>
          </View>
          <View style={styles.tableMaterial__body__description}>
            <Text>{item.description}</Text>
          </View>
          <View style={styles.tableService__body__unitPrice}>
            <Text>{item.unit}</Text>
          </View>
          <View style={styles.tableService__body__unitPrice}>
            <Text>{"S/ " + item.unitPrice.toFixed(2)}</Text>
          </View>
          <View style={styles.tableService__body__total}>
            <Text>{"S/ " + (item.quantity * item.unitPrice).toFixed(2)}</Text>
          </View>
        </View>
      ))}
      <View style={styles.tableService__footer__total}>
        {listMaterial.length > 0 && (
          <>
            <View style={styles.tableService__footer__empy}></View>
            <View style={styles.tableService__footer__text}>
              <Text>Total</Text>
            </View>
            <View style={styles.tableService__footer__value}>
              <Text>{`S/ ${totalPriceTableMaterial.toFixed(2)}`}</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const Information = ({ name, ruc, note }: InformationProps) => {
  return (
    <View style={styles.information}>
      <Text>{note}</Text>
      <Text style={styles.information__farewall}>Atentamente;</Text>
      <View style={styles.information__box}>
        <Text>{name ? name : "Jorge Ernesto Torres Medrano"}</Text>
        <Text>Tècnico Electricista</Text>
        <Text>{ruc ? ruc : "10159525339"}</Text>
      </View>
    </View>
  );
};

export default MyDocument;
