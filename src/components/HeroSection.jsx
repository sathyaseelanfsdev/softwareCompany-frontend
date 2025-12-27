export default function HeroSection({h,p,name}){
  return(
    <section key={crypto.randomUUID()} className={name}>
      <h1>{h}</h1>
      <p>{p}</p>
    </section>
  );
}