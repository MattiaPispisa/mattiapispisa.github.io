import { formatDate } from "../../functions";
import ListItem from "../widgets/Item";
import SubTitle from "../widgets/Subtitle";

// TODO: hastag come chips che filtrano i post

function Posts() {
  return (
    <>
      <SubTitle>
        <p>Post</p>
      </SubTitle>
      <div className="flex flex-col gap-y-12">
        <ListItem
          title={"Flutter, not yet ready for web"}
          description={
            <p>
              Starting from a code example that had a particular bug will be
              explored the source code of react focusing especially on hooks and
              fiber nodes.
            </p>
          }
          trailing={<p>{formatDate("2023-12-12")}</p>}
          footer={<p>#flutter #dart #webdev #javascript</p>}
        />
        <ListItem
          title={"React Hooks and Fiber deep diving"}
          description={
            <p>
              Starting from a code example that had a particular bug will be
              explored the source code of react focusing especially on hooks and
              fiber nodes.
            </p>
          }
          trailing={<p>{formatDate("2023-10-28")}</p>}
          footer={<p>#react #javascript #tutorial #hooks</p>}
        />
        <ListItem
          title={"Flutter Monorepo & Dependency Injection"}
          description={
            <p>
              Monorepo refers to the practice of software development in which
              all components of an application or system are maintained within a
              single repository. A good article that describes well what it is,
              pros and cons is the following: monorepo.tools. In the case of a
              flutter application an excellent monorepo manager is Melos, here a
              tutorial on how to create and manage it.
            </p>
          }
          trailing={<p>{formatDate("2023-10-10")}</p>}
          footer={<p>#flutter #mobile #dart #tutorial</p>}
        />
        <ListItem
          title={"Mastering dependency injection in Flutter"}
          description={
            <p>
              One of the 5 SOLI D principles capitulates that a high-level
              module should depend only on abstract class not on the
              implementation. This leads to less coupling between modules. In
              this article we will focus on how to apply this pattern in
              flutter.
            </p>
          }
          trailing={<p>{formatDate("2023-08-10")}</p>}
          footer={<p>#flutter #dependencyinjection #mobile #dart</p>}
        />
      </div>
    </>
  );
}

export default Posts;
