import { PdfIcon } from "../icons/depositPage/pdfIcon";

export const SectionLendingConditions = () => {
  return (
    <section className="bg-netural_100 py-[50px]" id="documentCredit">
      <div className="div-container flex flex-col gap-6">
        <h2 className="title">Умови кредитування</h2>
        <ul className="md:text-[18px] text-primary_700 flex flex-col gap-6 md:grid md:grid-cols-2">
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1LxgvijOOov7GY4nxcAAAaoOFabz5Diy8/view?usp=drive_link"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="size-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">Кредитний продукт «Споживчий»</span>
            </a>
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1_5gvqNeAwsVNkx5dyVh8XMp4AOlX03fW/view?usp=drive_link"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">
                Примірний договір про споживчий кредит
              </span>
            </a>
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1-n7uaNbO86RtR6SRGvsr4E2k_Mg9NeCu/view?usp=drive_link"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">
                Істотні характеристики послуги з надання споживчого кредиту
              </span>
            </a>
          </li>

          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Rp48M2EruvjAuS2_7dTrGSedQ08C1Xk5/view?usp=drive_link"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">
                Примірний договір кредитної лінії
              </span>
            </a>
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1EGOUOmRO-ZVlwC2pcV7mr84w8pB7PbTB/view?usp=drive_link"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">
                Істотні характеристики послуги з надання мікрокредиту
              </span>
            </a>
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1VJz7ARzk_Hrn7Xv7cs4rO4uO-I8KtHuk/view?usp=drive_link"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">
                Правила надання фінансових послуг
              </span>
            </a>
          </li>
          <li className="flex gap-2 md:w-[277px] lg:w-[442px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1OtDeYV3-iGUM5290KDXOu-vEsPrhKjD-/view?usp=drive_link"
              className="flex gap-3 mt-6 cursor-pointer"
            >
              <div className="w-6 h-6">
                <PdfIcon />
              </div>{" "}
              <span className="md:text-lg">
                Попередження про можливі наслідки згідно законодавством України
                для споживачів у разі користування фінансовою послугою або
                невиконання ним обов’язків згідно з договором про споживчий
                кредит
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
