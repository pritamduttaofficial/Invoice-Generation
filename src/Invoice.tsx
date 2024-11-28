import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

export interface Product {
  id: string;
  name: string;
  categoryId_fk?: string;
  subcategoryId_fk?: string;
  hsnId_fk: string;
  imageUrl: string;
  pricePerRoll20X6?: number;
  pricePerRoll20X8?: number;
  pricePerSquareFeet?: number;
  price?: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  unitsSold: number;
  isInstallationReq: boolean;
  isActive: boolean;
}

export enum OrderStates {
  PENDING = "pending",
  UNVERIFIED = "unverified",
  CONFIRMED = "confirmed",
  ENROUTE = "enroute",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

export interface OrderItem {
  id: string;
  orderId_fk: string;
  productId_fk: string;
  quantity: number;
  price: number;
  priceWithGst: number;
  dimensions: string;
  product: Product;
}

export interface Address {
  id: string;
  userId_fk: string;
  addressName: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: number;
  country: string;
  isDeleted: Boolean;
}

export interface Order {
  id: string;
  userId_fk: string;
  addressId_fk: string;
  totalBill: number;
  totalBillWithGst: number;
  totalBillWithAdditionalCharges: number;
  orderStatus: OrderStates;
  createdAt: string;
  updatedAt: string;
  receiptImageUrl: string;
  orderInvoiceUrl: string;
  note: string;
  refundStatus: Boolean;
  paymentStatus: Boolean;
  paymentMethod: string;
  OrderItem: OrderItem[];
  address: Address;
}

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf",
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5vAw.ttf",
      fontWeight: "medium",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAw.ttf",
      fontWeight: "ultrabold",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAw.ttf",
      fontWeight: "semibold",
    },
  ],
});

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: "Roboto" },
  header: {
    marginBottom: 20,
    textAlign: "center",
    position: "relative",
  },
  logo: {
    width: 60,
    height: 60,
    position: "absolute",
    left: 0,
    top: 0,
  },
  title: { marginTop: 10, fontSize: 18, fontWeight: "bold" },
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
  totalSection: {
    marginTop: 10,
    padding: 10,
    border: "1px solid #000",
    fontSize: 12,
    alignSelf: "flex-end",
    width: "50%",
  },
  totalRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  totalLabel: {
    fontWeight: "bold",
  },
  grandTotalLabel: {
    fontWeight: "extrabold",
  },
  totalValue: {
    textAlign: "right",
  },
  supplyAndDelivery: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

const Invoice = ({ order }: { order: Order }) => {
  const renderPriceWithRupee = (amount: number) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="rupee.png"
        style={{ width: 10, height: 10, marginRight: 3 }}
      />
      <Text>{amount.toFixed(2)}</Text>
    </View>
  );
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src="logo.jpeg" style={styles.logo} />
          <Text style={styles.title}>Invoice</Text>
          <Text>Order ID: {order.id}</Text>
          <Text>
            Order Date: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.addressBox}>
            <Text style={styles.sectionHeader}>Billing Address</Text>
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

        <View style={styles.supplyAndDelivery}>
          <View style={styles.addressBox}>
            <Text>Place of Supply:</Text>
            <Text>Assam</Text>
          </View>
          <View style={styles.addressBox}>
            <Text>Place of Delivery:</Text>
            <Text>{order.address.state}</Text>
          </View>
        </View>

        <Text>Total Items: {order.OrderItem.length}</Text>

        <View style={styles.table}>
          <View style={[styles.row, styles.headerRow]}>
            <Text style={styles.cell}>Product</Text>
            <Text style={styles.cell}>Qty</Text>
            <Text style={styles.cell}>Unit Price </Text>
            <Text style={styles.cell}>Net Amount </Text>
            <Text style={styles.cell}>Total (with GST) </Text>
          </View>
          {order.OrderItem.map((item) => (
            <View key={item.id} style={styles.row}>
              <Text style={styles.cell}>{item.product.name}</Text>
              <Text style={styles.cell}>{item.quantity}</Text>
              <View
                style={[
                  styles.cell,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                {renderPriceWithRupee(item.price)}
              </View>
              {/* Net Amount */}
              <View
                style={[
                  styles.cell,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                {renderPriceWithRupee(item.quantity * item.price)}
              </View>
              <View
                style={[
                  styles.cell,
                  {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                {renderPriceWithRupee(item.quantity * item.priceWithGst)}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.totalSection}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Sub Total:</Text>
            <Text style={styles.totalValue}>
              {renderPriceWithRupee(order.totalBill)}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tax Amount:</Text>
            <Text style={styles.totalValue}>
              {order.totalBillWithGst && order.totalBill
                ? renderPriceWithRupee(order.totalBillWithGst - order.totalBill)
                : "N/A"}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Others:</Text>
            <Text style={styles.totalValue}>
              {order.totalBillWithGst && order.totalBill
                ? renderPriceWithRupee(
                    order.totalBillWithAdditionalCharges -
                      order.totalBillWithGst
                  )
                : "N/A"}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.grandTotalLabel}>Grand Total:</Text>
            <Text style={styles.grandTotalLabel}>
              {renderPriceWithRupee(order.totalBillWithAdditionalCharges)}
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            paddingTop: 5,
            marginTop: 10,
            width: 160,
            border: "1px solid black",
          }}
        >
          <Image
            src="signature.png"
            style={{
              width: 60,
              height: 40,
            }}
          />
          <Text>Chitra</Text>
          <Text>Authorised Signatory</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
