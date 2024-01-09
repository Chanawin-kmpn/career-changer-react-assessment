import Layout from "./Layout";
const Owner = () => {
  return (
    <Layout>
      <div className="profile-section flex flex-col items-center mt-[-30px]">
        <h1 className="text-[2rem] font-bold mb-8">Pond - Group D - JSD6</h1>
        <img
          className="max-w-[270px] block w-full"
          src="/assets/Profile.jpg"
          alt="Profile-image"
        />
        <div className="bio-section mt-12 text-center">
          <h4 className="font-bold mb-8">Short Biograply:</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae
            soluta in eaque dolorem! Provident consectetur, labore odit ut
            soluta harum neque. Vitae deleniti dolorem quae expedita! Nemo quod
            ullam porro ut hic dolor tempore cumque nulla non accusantium optio
            ad nam minus facilis dolores eius vero expedita deserunt quos
            pariatur saepe, nostrum at totam quae. Porro hic dolor accusantium
            ea minus atque rem maiores quaerat in nisi officiis temporibus
            perspiciatis est quam tempora mollitia consectetur explicabo esse
            enim, adipisci odio beatae nesciunt non exercitationem. Fugiat,
            tempore? Corrupti ipsa velit laboriosam, cupiditate fugiat debitis!
            Nemo, porro exercitationem. Fuga, officiis ipsa?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Owner;
