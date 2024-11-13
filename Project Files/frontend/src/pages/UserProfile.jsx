import { useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    joinDate: ""
  });
  
  //Data to be fetched from database . Dummy data is displayed
  const [auctionHistory] = useState([
    { id: 1, item: "Vintage Watch", status: "Won", price: "$250", date: "2024-03-15", type: "purchase" },
    { id: 2, item: "Art Piece", status: "Lost", price: "$180", date: "2024-03-10", type: "purchase" },
    { id: 3, item: "Collectible Card", status: "Active", price: "$120", date: "2024-03-20", type: "purchase" },
  ]);
  
  //Data to be fetched from database
  const [itemsSold] = useState([
    { id: 4, item: "Antique Lamp", price: "$350", date: "2024-04-02", status: "Sold", type: "sale" },
    { id: 5, item: "Luxury Bag", price: "$1200", date: "2024-04-05", status: "Sold", type: "sale" },
    { id: 6, item: "Classic Guitar", price: "$500", date: "2024-04-12", status: "Sold", type: "sale" },
    { id: 7, item: "Rare Book", price: "$85", date: "2024-04-20", status: "Sold", type: "sale" }
  ]);
  
  const styles = {
    pageBackground: {
      backgroundColor: '#FAF3E0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    container: {
      maxWidth: '900px',
      width: '100%',
      backgroundColor: '#FFF',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      borderRadius: '8px',
      padding: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '15px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    mainContent: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
    },
    historySection: {
      flex: 1,
      backgroundColor: '#F9F9F9',
      padding: '15px',
      borderRadius: '6px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    historyTitle: {
      fontSize: '1.2em',
      marginBottom: '10px',
      color: '#333',
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      textAlign: 'left',
      fontWeight: 'bold',
      borderBottom: '2px solid #ddd',
      padding: '8px',
    },
    td: {
      padding: '8px',
      borderBottom: '1px solid #eee',
    },
    status: {
      fontWeight: 'bold',
      padding: '5px 10px',
      borderRadius: '4px',
      display: 'inline-block',
      textAlign: 'center',
    },
    wonStatus: {
      color: '#fff',
      backgroundColor: '#4CAF50',
    },
    lostStatus: {
      color: '#fff',
      backgroundColor: '#F44336',
    },
    activeStatus: {
      color: '#fff',
      backgroundColor: '#FFC107',
    },
  };
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderStatus = (status) => {
    const style =
      status === 'Won' ? styles.wonStatus :
      status === 'Lost' ? styles.lostStatus :
      styles.activeStatus;
    return <span style={{ ...styles.status, ...style }}>{status}</span>;
  };

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        {/* Profile Details with Input Fields */}
        {/* <div style={styles.header}> */}
        {/* <h1>{userData.name}'s Profile</h1> */}
          <label style={styles.label}>
            Name:
            <input 
              type="text" 
              name="name" 
              value={userData.name} 
              onChange={handleInputChange}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Email:
            <input 
              type="email" 
              name="email" 
              value={userData.email} 
              onChange={handleInputChange} 
              style={styles.input}
            />
          </label>
        {/* </div> */}

        {/* Main Content - Auction History and Item Sold */}
        <div style={styles.mainContent}>
          {/* Auction History Section */}
          <div style={styles.historySection}>
            <h2 style={styles.historyTitle}>Auction History (Buyer)</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Item</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Price</th>
                  <th style={styles.th}>Date</th>
                </tr>
              </thead>
              <tbody>
                {auctionHistory.map((auction) => (
                  <tr key={auction.id}>
                    <td style={styles.td}>{auction.item}</td>
                    <td style={styles.td}>{renderStatus(auction.status)}</td>
                    <td style={styles.td}>{auction.price}</td>
                    <td style={styles.td}>{auction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Item Sold Section */}
          <div style={styles.historySection}>
            <h2 style={styles.historyTitle}>Item Sold (Seller)</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Item</th>
                  <th style={styles.th}>Price</th>
                  <th style={styles.th}>Date Sold</th>
                </tr>
              </thead>
              <tbody>
                {itemsSold.map((soldItem) => (
                  <tr key={soldItem.id}>
                    <td style={styles.td}>{soldItem.item}</td>
                    <td style={styles.td}>{soldItem.price}</td>
                    <td style={styles.td}>{soldItem.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
