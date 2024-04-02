import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default function MealsDeatailsPage({ params }) {
  console.log(params, "paramscheck");
  const meal = getMeal(params.mealSlug);
  console.log(meal, "bhojraj");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{email.creator}</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
        <main>
          <p
            className={classes.instructions}
            dangerouslySetInnerHTML={{
              __html: "...",
            }}
          ></p>
        </main>
      </header>
    </>
  );
}