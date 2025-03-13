import ButtonLogin from "@/components /ButtonLogin";
import FAQ from "@/components /Faq";
import HamburgerIcon from "@/components /HamburgerIcon";
import FtHome from "@/components /FtHome";
import Image from "next/image";


export default function Home() {

   const feacturesListCard =
       ["Gerencie todas as contas em um só lugar",
        "Reduza em até 60% os bloqueios","Painel organizado com todas as contas","Escale mais que os seus concorrentes"];

  return(
      <main>
          {/* HEADER */}
          <section className="navbar bg-base-200 flex justify-between items-center px-8 py-2 fixed top-0 left-0 mx-auto w-full">
              <div className="font-bold px-6 py-3">TT FAST</div>
              <div className="space-x-4 max-md:hidden px-6 py-3">
                  <a className="link link-hover" href="#pricing">Preço</a>
                  <a className="link link-hover" href="#faq">FAQ</a>
              </div>
              <div >
                  <ButtonLogin />
              </div>
              <div>
                  <HamburgerIcon />
              </div>
          </section>
          {/*HERO*/}
          <section className="text-center py-32 px-8 max-w-3xl mx-auto flex flex-con lg:flex-row gap-14">
              <div>
                  <h1 className="text-4xl font-extrabold mb-6" >Gerencie múltiplas contas do TikTok Ads sem dor de cabeça—tudo em um só lugar!</h1>
                  <div className="opacity-90 font-semibold text-gray-700 mb-5 py-3 mt-2"> A melhor ferramenta do mercado pra quem trabalha com tiktokads</div>
                  <ButtonLogin/>
                  <Image src="/productDemo.jpeg" alt="productDemo" width={500}
                         height={300}  className="mx-96 rounded-xl object-cover object-center " />
              </div>

          </section>

          {/*PRINCING*/}
          <section className="bg-base-200 " id="pricing">
              <div className="py-32 px-8 max-w-3xl mx-auto">
                  <p className="text-sm uppercase font-medium text-center text-primary mb-4">Preço</p>
                  <h2 className="text-3xl font-extrabold mb-6 text-center">Mais barato do que pagar vários funcionários pra rodar sua operacao</h2>

                  {/*Card do preço*/}
                  <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto">
                      <div className="flex gap-2 items-baseline">
                          <div className="text-4xl font-black">$19,90</div>
                          <div className="uppercase text-sm font-medium opacity-70">/mês</div>
                      </div>

                      <ul className="space-y-2">
                          {feacturesListCard.map(
                                  (priceItem) => {
                                    return <li className="flex gap-2 items-center" key={priceItem}>
                                          <span>✔{priceItem}</span>
                                      </li>
                                  }
                              )
                          }
                      </ul>
                  </div>
              </div>
          </section>
          {/*FAQ*/}
          <section className="text-center py-32 px-8 max-w-3xl mx-auto" id="faq">
              <FAQ/>
          </section>
          {/*FOOTER*/}
          <footer>
              <FtHome/>
          </footer>
      </main>
  );
}
