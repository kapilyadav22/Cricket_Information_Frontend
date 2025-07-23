const CommonErrorComponent = (props: string) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 justify-self-center">{props.pageName}</h1>
      <p className="justify-self-center text-red-500">Failed to load {props.pageName} data. Please try again later.</p>
    </div>
  );
}   
export default CommonErrorComponent;