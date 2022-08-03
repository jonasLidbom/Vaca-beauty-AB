export default function Product(props) {
  return (
    <>
    <div className={"block"}>
      <div className={"product-image"}>
        <img className={"product-image-image img-fluid"} src={props.img} alt="product-img"/>
        <div className={"image-overlay"}>
            <h4 className={"image-description"}>
              A plumping 2% Hyaluronic Acid complex with Vitamin C
              to help hydrate and brighten tired-looking skin.
            </h4>
        </div>
      </div>
      <dt className={"block-name"}><b>{props.name}</b></dt>
      <dt className={"block-description"}>{props.description}</dt>
      <dt className={"block-price"}>{props.price}</dt>
    </div>
    </>
  );
}
