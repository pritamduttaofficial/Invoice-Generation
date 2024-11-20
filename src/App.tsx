import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";

const orderData = {
  id: "ORD123456",
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
  },
  address: {
    addressName: "office",
    line1: "Dispur Lastgate",
    line2: "Opposite XYZ",
    city: "Guwahati",
    state: "Assam",
    pincode: 781021,
    country: "India",
  },
  orderItem: [
    {
      id: "OI1",
      product: {
        id: "95016205-b453-471e-aad5-7cafae3c07f8",
        name: "Product1",
        pricePerRoll20X8: 3500,
        pricePerRoll20X6: 3000,
        pricePerSquareFeet: 500,
        price: null,
        isInstallationReq: true,
        installationCharges: 5000,
        hsnRecord: {
          id: "01d0202a-66ce-44fe-a42f-1b36c1b2db8f",
          hsnNumber: "1234",
          description: "Bamboo Products",
          sgst: 6,
          cgst: 6,
          igst: 12,
          isDeleted: false,
        },
        pricePerRoll20X6WithGst: 3360,
        pricePerRoll20X8WithGst: 3920,
        pricePerSquareFeetWithGst: 560,
      },
      quantity: 2,
      price: 1200,
      priceWithGst: 1250,
    },
    {
      id: "OI2",
      product: {
        id: "95016205-b453-471e-aad5-7cafae3c07f8",
        name: "Product2",
        pricePerRoll20X8: 3500,
        pricePerRoll20X6: 3000,
        pricePerSquareFeet: 500,
        price: null,
        isInstallationReq: true,
        installationCharges: 5000,
        hsnRecord: {
          id: "01d0202a-66ce-44fe-a42f-1b36c1b2db8f",
          hsnNumber: "1234",
          description: "Bamboo Products",
          sgst: 6,
          cgst: 6,
          igst: 12,
          isDeleted: false,
        },
        pricePerRoll20X6WithGst: 3360,
        pricePerRoll20X8WithGst: 3920,
        pricePerSquareFeetWithGst: 560,
      },
      quantity: 5,
      price: 3200,
      priceWithGst: 3250,
    },
    {
      id: "OI3",
      product: {
        id: "95016205-b453-471e-aad5-7cafae3c07f8",
        name: "Product3",
        pricePerRoll20X8: 3500,
        pricePerRoll20X6: 3000,
        pricePerSquareFeet: 500,
        price: null,
        isInstallationReq: true,
        installationCharges: 5000,
        hsnRecord: {
          id: "01d0202a-66ce-44fe-a42f-1b36c1b2db8f",
          hsnNumber: "1234",
          description: "Bamboo Products",
          sgst: 6,
          cgst: 6,
          igst: 12,
          isDeleted: false,
        },
        pricePerRoll20X6WithGst: 3360,
        pricePerRoll20X8WithGst: 3920,
        pricePerSquareFeetWithGst: 560,
      },
      quantity: 10,
      price: 6200,
      priceWithGst: 6250,
    },
  ],
  totalBill: 9700,
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
