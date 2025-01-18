import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/src/config/site";
import { title, subtitle } from "@/src/components/primitives";
// import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Bem-vindo à&nbsp;</span>
        <span className={title({ color: "violet" })}>AUDITA</span>
        <br />
        <br />
        <span className={title({ size: "sm" })}>Associação dos Auditores-Fiscais&nbsp;</span>
        <span className={title({ color: "blue" })}>Ativos&nbsp;</span>
        <span className={title({ size: "sm" })}>da RFB</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Em defesa de uma categoria essencial à RFB.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentação
        </Link>
        {/* <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link> */}
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Colabore na elaboração do nosso
            <Code color="primary">Estatuto.</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
