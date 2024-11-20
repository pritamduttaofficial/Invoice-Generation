import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

interface HsnRecord {
  id: string;
  hsnNumber: string;
  description: string;
  sgst: number;
  cgst: number;
  igst: number;
  isDeleted: boolean;
}

interface Product {
  id: string;
  name: string;
  pricePerRoll20X8: number;
  pricePerRoll20X6: number;
  pricePerSquareFeet: number;
  price: number | null;
  isInstallationReq: boolean;
  installationCharges: number;
  hsnRecord: HsnRecord;
  pricePerRoll20X6WithGst: number;
  pricePerRoll20X8WithGst: number;
  pricePerSquareFeetWithGst: number;
}

interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
  price: number;
  priceWithGst: number;
}

interface User {
  name: string;
  email: string;
}

interface Address {
  addressName: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: number;
  country: string;
}

export interface Order {
  id: string;
  user: User;
  address: Address;
  orderItem: OrderItem[];
  totalBill: number;
}

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: "Helvetica" },
  header: { marginBottom: 20, textAlign: "center" },
  table: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    border: "1px solid #000",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderBottom: "1px solid #000",
  },
  headerRow: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  },
  cell: { flex: 1, textAlign: "center", padding: 2 },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  addressBox: {
    flex: 1,
    padding: 10,
    border: "1px solid #000",
    marginRight: 10,
    fontSize: 11,
  },
  soldBy: {
    marginTop: 10,
    padding: 10,
    border: "1px solid #000",
    fontSize: 11,
  },
  total: {
    textAlign: "right",
    fontSize: 14,
    marginTop: 10,
    fontWeight: "bold",
  },
});

const Invoice = ({ order }: { order: Order }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Invoice</Text>
          <Text>Order ID: {order.id}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.addressBox}>
            <Text style={styles.sectionHeader}>Billing Address</Text>
            <Text>{order.user.name}</Text>
            <Text>{order.address.line1}</Text>
            {order.address.line2 && <Text>{order.address.line2}</Text>}
            <Text>
              {order.address.city}, {order.address.state} -{" "}
              {order.address.pincode}
            </Text>
            <Text>{order.address.country}</Text>
          </View>

          <View style={styles.addressBox}>
            <Text style={styles.sectionHeader}>Shipping Address</Text>
            <Text>{order.user.name}</Text>
            <Text>{order.address.line1}</Text>
            {order.address.line2 && <Text>{order.address.line2}</Text>}
            <Text>
              {order.address.city}, {order.address.state} -{" "}
              {order.address.pincode}
            </Text>
            <Text>{order.address.country}</Text>
          </View>
        </View>

        <View style={styles.soldBy}>
          <Text style={styles.sectionHeader}>Sold By</Text>
          <Text>Seller Name: XYZ Pvt. Ltd.</Text>
          <Text>Address: Some Address, Some City, Some State, India</Text>
          <Text>Contact: +91 9876543210</Text>
          <Text>GSTIN: 29XXXXXXXXXXXXX</Text>
        </View>

        <View style={styles.table}>
          <View style={[styles.row, styles.headerRow]}>
            <Text style={styles.cell}>Product</Text>
            <Text style={styles.cell}>Quantity</Text>
            <Text style={styles.cell}>Unit Price</Text>
            <Text style={styles.cell}>Net Amount</Text>
            <Text style={styles.cell}>GST (%)</Text>
            <Text style={styles.cell}>Total</Text>
          </View>
          {order.orderItem.map((item) => (
            <View key={item.id} style={styles.row}>
              <Text style={styles.cell}>{item.product.name}</Text>
              <Text style={styles.cell}>{item.quantity}</Text>
              <Text style={styles.cell}>₹{item.price.toFixed(2)}</Text>
              <Text style={styles.cell}>
                ₹{(item.quantity * item.price).toFixed(2)}
              </Text>
              <Text style={styles.cell}>
                {item.product.hsnRecord.igst}% (IGST)
              </Text>
              <Text style={styles.cell}>
                ₹{(item.quantity * item.priceWithGst).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.total}>
          Grand Total: ₹{order.totalBill.toFixed(2)}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            paddingTop: 30,
            marginTop: 10,
            width: 160,
            border: "1px solid black",
          }}
        >
          <Text>Chitra</Text>
          <Text>Authorised Signatory</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
