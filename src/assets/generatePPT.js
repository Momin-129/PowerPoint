import PptxGenJS from "pptxgenjs";

export const GeneratePresentation = (template) => {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "A3", width: 11.02, height: 6.2 });
  pptx.layout = "A3";

  template.map((each) => {
    const slide = pptx.addSlide();
    each.map((item) => {
      if (item.hasOwnProperty("slideColor")) {
        slide.background = { color: item.slideColor };
      } else if (item.hasOwnProperty("type")) {
        const { type, ...options } = item;
        slide.addShape(type, options);
      } else if (item.hasOwnProperty("text")) {
        let { text, ...options } = item;

        slide.addText(text, options);
      }
    });
  });

  pptx.writeFile({ fileName: "Presentation.pptx" });
};
