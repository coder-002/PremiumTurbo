const Footer = () => {
  return (
    <div
      style={{
        zIndex: 1,
        height: "15px",
        padding: "5px",
        paddingTop: "0px",
        paddingBottom: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <small>
        <strong>
          Powered by:
          <a href={"https://premiumtech.com.np/premiumcbs"}>Premium CBS</a>
        </strong>
      </small>
    </div>
  );
};

export default Footer;
