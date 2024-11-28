import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";

const orderData = {
  id: "ed4db441-4c25-4a94-8395-eda5a05718e2",
  userId_fk: "f962c0ed-3db8-43be-8439-8ffe013282d8",
  addressId_fk: "5e7cce17-39e0-4f5f-bc1b-9e506895670e",
  totalBill: 27500,
  totalBillWithGst: 28500,
  totalBillWithAdditionalCharges: 30500,
  orderStatus: "enroute",
  createdAt: "2024-11-22T04:43:31.575Z",
  updatedAt: "2024-11-25T06:02:11.352Z",
  receiptImageUrl: null,
  orderInvoiceUrl: null,
  note: null,
  refundStatus: false,
  paymentStatus: true,
  paymentMethod: null,
  OrderItem: [
    {
      id: "6f4611cc-3fbc-4d46-b8da-980ccfae3a2e",
      orderId_fk: "ed4db441-4c25-4a94-8395-eda5a05718e2",
      productId_fk: "eef58d63-7653-4c0e-83a7-b0dd06f6a1e7",
      quantity: 1555,
      price: 15000,
      priceWithGst: 15500,
      dimensions: "10,10",
      product: {
        id: "eef58d63-7653-4c0e-83a7-b0dd06f6a1e7",
        name: "Product2",
        categoryId_fk: "acff3860-43b3-4edc-82d5-40a060d7ceaa",
        subcategoryId_fk: null,
        hsnId_fk: "03892ca2-c699-44ac-94d7-79526c8fb077",
        imageUrl:
          "https://chitra-assets.s3.ap-south-1.amazonaws.com/product_eef58d63-7653-4c0e-83a7-b0dd06f6a1e7_Product2.jpg",
        pricePerRoll20X8: 333,
        pricePerRoll20X6: 222,
        pricePerSquareFeet: 21,
        price: null,
        description: "good product",
        createdAt: "2024-11-21T06:31:40.690Z",
        updatedAt: "2024-11-22T04:47:35.667Z",
        isDeleted: false,
        unitsSold: 1,
        isInstallationReq: true,
        isActive: false,
      },
    },
    {
      id: "6f4611cc-3fbc-4d46-b8da-980ccfae3a2f",
      orderId_fk: "ed4db441-4c25-4a94-8395-eda5a05718e2",
      productId_fk: "eef58d63-7653-4c0e-83a7-b0dd06f6a1e7",
      quantity: 555,
      price: 12500,
      priceWithGst: 12700,
      dimensions: "10,10",
      product: {
        id: "eef58d63-7653-4c0e-83a7-b0dd06f6a1e7",
        name: "Product3",
        categoryId_fk: "acff3860-43b3-4edc-82d5-40a060d7ceaa",
        subcategoryId_fk: null,
        hsnId_fk: "03892ca2-c699-44ac-94d7-79526c8fb077",
        imageUrl:
          "https://chitra-assets.s3.ap-south-1.amazonaws.com/product_eef58d63-7653-4c0e-83a7-b0dd06f6a1e7_Product2.jpg",
        pricePerRoll20X8: 333,
        pricePerRoll20X6: 222,
        pricePerSquareFeet: 21,
        price: null,
        description: "good product",
        createdAt: "2024-11-21T06:31:40.690Z",
        updatedAt: "2024-11-22T04:47:35.667Z",
        isDeleted: false,
        unitsSold: 1,
        isInstallationReq: true,
        isActive: false,
      },
    },
  ],
  address: {
    id: "5e7cce17-39e0-4f5f-bc1b-9e506895670e",
    userId_fk: "f962c0ed-3db8-43be-8439-8ffe013282d8",
    addressName: "home",
    line1: "Sixmile, Khanapara",
    line2: "Opposite XYZ",
    city: "Guwahati",
    state: "Assam",
    pincode: 781033,
    country: "India",
    isDeleted: false,
  },
};

function App() {
  return (
    <>
      {/* To view invoice in the web */}
      <PDFViewer width="900" height="600">
        <Invoice order={orderData} />
      </PDFViewer>
      <h1>Order Details</h1>

      {/* To download invoice */}
      <PDFDownloadLink
        document={<Invoice order={orderData} />}
        fileName={`invoice_${orderData.id}.pdf`}
      >
        Download Invoice
      </PDFDownloadLink>
    </>
  );
}

export default App;
