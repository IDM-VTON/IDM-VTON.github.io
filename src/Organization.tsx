import Author from "./Author";
import Department from "./Department";
import CODEBtn from "./CODEBtn";
import DEMOBtn from "./DEMOBtn";
import PDFBtn from "./PDFBtn";
import { AuthorInfo, DepartmentInfo } from "./types";

const authors: AuthorInfo[] = [
  {
    name: "Yisol Choi",
    ref: "1",
    page: "https://www.linkedin.com/in/yisol-choi-b91862263/"
  },
  {
    name: "Sangkyung Kwak",
    ref: "1",
    page: "https://alinlab.kaist.ac.kr/members.html"
  },
  {
    name: "Kyungmin Lee",
    ref: "1",
    page: "https://kyungmnlee.github.io/"
  },
  {
    name: "Hyungwon Choi",
    ref: "2",
    page: "https://www.linkedin.com/in/hyungwon-choi"
  },
  {
    name: "Jinwoo Shin",
    ref: "1",
    page: "https://alinlab.kaist.ac.kr/shin.html"
  }
];

const departments: DepartmentInfo[] = [
  {
    name: "KAIST",
    ref: "1"
  },
  {
    name: "OMNIOUS.AI",
    ref: "2"
    page: "https://omnious.ai/"
  }
];

const Organization = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Author authors={authors} />
      </div>
      <div>
        <Department departments={departments} />
      </div>
      <div className="flex justify-center items-center">
        <PDFBtn placeholder="Paper" />
        <DEMOBtn placeholder="Demo" />
        <CODEBtn placeholder="Code" />
      </div>
    </div>
  );
};

export default Organization;
