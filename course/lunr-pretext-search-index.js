var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "course-documents",
  "level": "1",
  "url": "course-documents.html",
  "type": "Chapter",
  "number": "",
  "title": "Course Documents",
  "body": " Course Documents  To be added later     "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1: Derivatives and the Intermediate Value Property (5.1-5.2)",
  "body": " Week 1: Derivatives and the Intermediate Value Property (5.1-5.2)   This is an outline of the topics we covered in the first week of class.     A Brief History of the Derivative  In the 17th century, Galileo discovered that the distance traveled by a falling object is proportional to the square of the time it has been falling. More precisely, if the distance fallen after seconds is denoted and measured in meters, then   From this we can find the average velocity of a falling object over any time interval using the formula   Suppose however, that we wanted to find the instantaneous velocity of an object 3 seconds after we drop it.  The difficulty here is that we have a single instance of time instead of a time interval.  Isaac Newton's approach to this problem was to approximate the instantaneous velocity by calculating the average velocity over smaller and smaller intervals.  The following table shows the average velocity over successively smaller time intervals.   Average Velocity    Time Interval  Average Velocity     29.449     29.4049     29.40049     It appears that as the time intervals get shorter, the average velocities get closer and closer to 29.4. Newton gave the following argument for why 29.4 is in fact the exact instantaneous velocity.  Let be a small positive number. Then the average velocity of the falling object during the time interval is   Newton then argued that since is an arbitrarily small positive number, terms ``multiplied by it will be nothing in respect to the rest'' and thus the exact instantaneous velocity is  .  Newton used the term ``fluxion'' for what we now call the derivative. He wrote a book called The Method of Fluxions in 1671 but it wasn't published until 1736.  In 1734 the philosopher George Berkeley criticized Newton's argument in his book The Analyst (subtitled A Discourse Addressed to an Infidel Mathematician: Wherein It Is Examined Whether the Object, Principles, and Inferences of the Modern Analysis Are More Distinctly Conceived, or More Evidently Deduced, Than Religious Mysteries and Points of Faith )  Berkeley's main objection to Newton's argument was that Newton treated the infinitesimal quantity as though it were both zero (by removing the term) and nonzero (by dividing by ).  ``And what are these fluxions? The velocities of evanescent increments. And what are these same evanescent increments? They are neither finite quantities, nor quantities infinitely small, nor yet nothing. May we not call them ghosts of departed quantities?''  In response to Berkeley's criticisms a number of mathematicians worked to find a more rigorous definition of the derivative.  In 1823 Cauchy gave a definition of derivative that used the concepts of limits to handle Berkeley's objection. His definition is basically the same as the modern definition of the derivative.  During the 1960's Abraham Robinson developed the theory of nonstandard analysis which provides a rigorous definition of infinitesimals and allows for the derivative to be defined in the same spirit of Newton and Leibniz.    The Derivative  The modern definition of the derivative is defined as follows.    Let be a function defined on an interval . Given the derivative of at is given by   provided this limit exists. In this case we say is differentiable at . If exists for all points we say that is differentiable on .    Hidden in this definition is the - relationship that comes from the way that the limit is defined. The - definition of the derivative looks like this.    Let be a function defined on an interval . Then the derivative of at is if for every , there exists such that   whenever   Note that by letting the derivative can be rewritten as     In geometry a tangent line to a curve is a line that touches the curve and follows the same direction as the curve at the point of contact.   A tangent line to a curve   A picture of a cubic function with a tangent line.    A secant line to a curve is a line that passes through 2 points on a curve.  The slope of the secant line on the curve that passes through points and is given by   As we take the limit as approaches , the secant line comes closer and closer to the tangent line at . Thus the slope of the tangent line at is   The example with the absolute value function shows that a continuous function may fail to be differentiable; however, every differentiable function must be continuous.    If is differentiable at a point , then is continuous at as well.     Since is differentiable at , exists.  We want to show . By the Algebraic Limit Theorem for functional limits   It follows that    A differentiable function must be continuous, but does the derivative, when viewed as a function of have to be continuous?  During the 1870's French Mathematician Jules Houel was writing a calculus textbook and asked his friend Gaston Darboux to look it over. Darboux was unhappy with some of Houel's proofs and came up with the following monster function as a counterexample.   Here is the graph of Darboux's function.   The graph of Darboux's function   A picture of a function that oscilates between positive and negative values and tends to 0 as x approaches 0 .     Go on then and explain to me a little, I beg you, why it is that when one uses the rule for composition functions, the derivative of is found to be which is indeterminate for even though the true value is -- excerpt from a letter from Darboux to Houel  Let's verify Darboux's claim about the derivative of this function using the chain rule.  The derivative of Darboux's function is   Here is the graph of the derivative of Darboux's function.   The graph of the derivative of Darboux's function   A picture of a function that oscilates between positive and negative values but does not tend to a single value as x approaches 0 .    Darboux's function is continuous and differentiable everywhere; however its derivative is not continuous at $0$. Thus a derivative does not need to be a continuous function.  The discontinuity of Darboux's function is an essential discontinuity, meaning that the one sided limits do not exist. In general this is the type of discontinuity that a derivative must have.    Combinations of differentiable functions    Let and satisfy so that the composition is defined. If is differentiable at and if is differentiable at , then is differentiable at with     Almost Proof:   The reason that the almost proof doesn't work as a rigorous proof is that it may be the case that in every neighborhood of there is an such that which causes division by zero. The proof will need to remedy this.  We will need the following result as a preliminary lemma for proving the Chain rule.   Caratheodory's Theorem   Let be defined on an interval containing the point . Then is differentiable at if and only if there exists a function on that is continuous at and satisfies for . In this case we have .     For the forward direction, if exists define by    is continuous because   Also for all . Thus the forward direction is proved.  For the reverse direction, suppose that a function exists that is continuous and for all .  Then since is continuous   Thus exists and .   We are now ready to present the proof of the chain rule.   Since exists Caratheodory's Theorem gives that there exists such that is continuous at and , where   Since exists Caratheodory's Theorem gives that there exists such that is continuous at and for where .  Now substitute and to obtain   The function is continuous at . Hence by Caratheodory's Theorem is differentiable at .  Moreover, and hence .    Algebraic Differentiability Theorem   Let and be functions defined on an interval and assume both are differentiable at some point . Then                          The proof is left as homework.    The Intermediate Value Property  Recall the Intermediate Value Theorem for continuous functions.  Let be continuous. If is a real number satisfying or , then there exists a point such that .  We say that a function (not necessarily continuous) satisfies the Intermediate Value Property if whenever is a real number satisfying or , then there exists a point such that .  Example: Darboux's function is continuous and hence satisfies the Intermediate Value Property.  The derivative of Darboux's function is not continuous at ; however, it still satisfies the Intermediate Value Property.  In fact, Darboux proved that every derivative satisfies the Intermediate Value Property.  The proof that every derivative satisfies the Intermediate Value Property follows from one of the most important uses of the derivative, determining the maximum or minimum values of a function.   Interior Extremum Theorem   Let be differentiable on an open interval . If attains a maximum value at some point (i.e., for all ) then . The same is true if is a minimum value.     Since is a maximum, and hence while   Since exists, both one sided limits exist and equal . Hence . The proof when is a minimum is similar.   We need one more lemma before we are ready to prove that derivatives possess the Intermediate Value Property.   (Not In Book)   Let be an interval, let and suppose that has a derivative at . Then    If there exists such that for such that .    If , then there is a number such that for such that        (1) Since there exists such that if and , then   If then the denominator is positive and hence so if .    Darboux's Theorem (AKA IVT for derivatives)   If is differentiable on an interval and if satisfies (or ), then there exists a point where .     Let . Then is differentiable on and . Also and we want to show that there exists where .  Since , it follows from the lemma that the minimum of does not occur at . Likewise since it also follows that the minimum of does not occur at .  Thus it must be that the minimum of occurs at . Hence by the interior extremum theorem and this completes the proof.    Recall Dirichlet's function is defined by Because this function doesn't satisfy the Intermediate Value Property, it cannot be the derivative of another function. Thus Dirichlet's function does not have an antiderivative.    "
},
{
  "id": "subsection-1-10",
  "level": "2",
  "url": "notes-week-01.html#subsection-1-10",
  "type": "Table",
  "number": "1",
  "title": "Average Velocity",
  "body": " Average Velocity    Time Interval  Average Velocity     29.449     29.4049     29.40049    "
},
{
  "id": "section-derivative-3",
  "level": "2",
  "url": "notes-week-01.html#section-derivative-3",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": "  Let be a function defined on an interval . Given the derivative of at is given by   provided this limit exists. In this case we say is differentiable at . If exists for all points we say that is differentiable on .   "
},
{
  "id": "section-derivative-5",
  "level": "2",
  "url": "notes-week-01.html#section-derivative-5",
  "type": "Definition",
  "number": "3",
  "title": "",
  "body": "  Let be a function defined on an interval . Then the derivative of at is if for every , there exists such that   whenever   Note that by letting the derivative can be rewritten as    "
},
{
  "id": "section-derivative-7",
  "level": "2",
  "url": "notes-week-01.html#section-derivative-7",
  "type": "Figure",
  "number": "4",
  "title": "",
  "body": " A tangent line to a curve   A picture of a cubic function with a tangent line.   "
},
{
  "id": "thm-diff-implies-cont2",
  "level": "2",
  "url": "notes-week-01.html#thm-diff-implies-cont2",
  "type": "Theorem",
  "number": "5",
  "title": "",
  "body": "  If is differentiable at a point , then is continuous at as well.   "
},
{
  "id": "section-derivative-15",
  "level": "2",
  "url": "notes-week-01.html#section-derivative-15",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Since is differentiable at , exists.  We want to show . By the Algebraic Limit Theorem for functional limits   It follows that   "
},
{
  "id": "section-derivative-19",
  "level": "2",
  "url": "notes-week-01.html#section-derivative-19",
  "type": "Figure",
  "number": "6",
  "title": "",
  "body": " The graph of Darboux's function   A picture of a function that oscilates between positive and negative values and tends to 0 as x approaches 0 .   "
},
{
  "id": "section-derivative-24",
  "level": "2",
  "url": "notes-week-01.html#section-derivative-24",
  "type": "Figure",
  "number": "7",
  "title": "",
  "body": " The graph of the derivative of Darboux's function   A picture of a function that oscilates between positive and negative values but does not tend to a single value as x approaches 0 .   "
},
{
  "id": "thm-Chain-Rule",
  "level": "2",
  "url": "notes-week-01.html#thm-Chain-Rule",
  "type": "Theorem",
  "number": "8",
  "title": "",
  "body": "  Let and satisfy so that the composition is defined. If is differentiable at and if is differentiable at , then is differentiable at with    "
},
{
  "id": "thm-caratheodory",
  "level": "2",
  "url": "notes-week-01.html#thm-caratheodory",
  "type": "Theorem",
  "number": "9",
  "title": "Caratheodory’s Theorem.",
  "body": " Caratheodory's Theorem   Let be defined on an interval containing the point . Then is differentiable at if and only if there exists a function on that is continuous at and satisfies for . In this case we have .   "
},
{
  "id": "section-3-7",
  "level": "2",
  "url": "notes-week-01.html#section-3-7",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " For the forward direction, if exists define by    is continuous because   Also for all . Thus the forward direction is proved.  For the reverse direction, suppose that a function exists that is continuous and for all .  Then since is continuous   Thus exists and .  "
},
{
  "id": "section-3-9",
  "level": "2",
  "url": "notes-week-01.html#section-3-9",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Since exists Caratheodory's Theorem gives that there exists such that is continuous at and , where   Since exists Caratheodory's Theorem gives that there exists such that is continuous at and for where .  Now substitute and to obtain   The function is continuous at . Hence by Caratheodory's Theorem is differentiable at .  Moreover, and hence .  "
},
{
  "id": "thm-algebraic-differentiability",
  "level": "2",
  "url": "notes-week-01.html#thm-algebraic-differentiability",
  "type": "Theorem",
  "number": "10",
  "title": "Algebraic Differentiability Theorem.",
  "body": " Algebraic Differentiability Theorem   Let and be functions defined on an interval and assume both are differentiable at some point . Then                         "
},
{
  "id": "thm-interior-extremum",
  "level": "2",
  "url": "notes-week-01.html#thm-interior-extremum",
  "type": "Theorem",
  "number": "11",
  "title": "Interior Extremum Theorem.",
  "body": " Interior Extremum Theorem   Let be differentiable on an open interval . If attains a maximum value at some point (i.e., for all ) then . The same is true if is a minimum value.   "
},
{
  "id": "subsec-4-10",
  "level": "2",
  "url": "notes-week-01.html#subsec-4-10",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Since is a maximum, and hence while   Since exists, both one sided limits exist and equal . Hence . The proof when is a minimum is similar.  "
},
{
  "id": "lem-not-in-book",
  "level": "2",
  "url": "notes-week-01.html#lem-not-in-book",
  "type": "Lemma",
  "number": "12",
  "title": "(Not In Book).",
  "body": " (Not In Book)   Let be an interval, let and suppose that has a derivative at . Then    If there exists such that for such that .    If , then there is a number such that for such that      "
},
{
  "id": "subsec-4-13",
  "level": "2",
  "url": "notes-week-01.html#subsec-4-13",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " (1) Since there exists such that if and , then   If then the denominator is positive and hence so if .  "
},
{
  "id": "thm-Darboux",
  "level": "2",
  "url": "notes-week-01.html#thm-Darboux",
  "type": "Theorem",
  "number": "13",
  "title": "Darboux’s Theorem (AKA IVT for derivatives).",
  "body": " Darboux's Theorem (AKA IVT for derivatives)   If is differentiable on an interval and if satisfies (or ), then there exists a point where .   "
},
{
  "id": "subsec-4-15",
  "level": "2",
  "url": "notes-week-01.html#subsec-4-15",
  "type": "Proof",
  "number": "3",
  "title": "",
  "body": " Let . Then is differentiable on and . Also and we want to show that there exists where .  Since , it follows from the lemma that the minimum of does not occur at . Likewise since it also follows that the minimum of does not occur at .  Thus it must be that the minimum of occurs at . Hence by the interior extremum theorem and this completes the proof.  "
},
{
  "id": "subsec-4-16",
  "level": "2",
  "url": "notes-week-01.html#subsec-4-16",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": " Recall Dirichlet's function is defined by Because this function doesn't satisfy the Intermediate Value Property, it cannot be the derivative of another function. Thus Dirichlet's function does not have an antiderivative.  "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2: The Mean Value Theorems (5.3)",
  "body": " Week 2: The Mean Value Theorems (5.3)   The Mean Value Theorem  Imagine that you are going to sail to Ireland. You could choose to sail in a straight line path or you could choose a curvier route, but no matter what route you choose, at some point you have to head in the same direction as the straight line path.  This observation is expressed mathematically by a result known as the Mean Value Theorem, which states that for a differentiable function the slope of the secant line between and is equal to the slope of the tangent line at some point between and    Different Paths to sail across the Atlantic Ocean   A picture of the Atlantic Ocean with two paths starting at New York and ending at Ireland. One path is a straight line, while the other bends and curves.     Mean Value Theorem   If be continuous on and differentiable on . If , then there exists a point where     The importance of the Mean Value Theorem goes beyond its immediate geometric interpretation. The MVT is significant because it relates the value of the derivative of a function to the value of the function itself.  Several proofs of the Mean Value Theorem have been given. The first proof of the modern form of the MVT is due to Cauchy in 1823.  In 1882 Camille Jordan published a calculus textbook with an erroneous proof of the MVT. The error was pointed out by Giuseppe Peano, who noted in a letter to Jordan that his proof implicitly assumed the continuity of the derivative.  Peano also showed that Jordan's proof would not work for the function   We will prove the MVT by first proving the following special case first noted by Michel Rolle in 1690.   Rolle's Theorem   Let be continuous on and differentiable on . If , then there exists a point such that .     Since is a continuous function on a compact set, contains both a minimum and a maximum. If these occur at the endpoints, then the function is constant and we are done.  If not, there is either a maximum or minimum at . Thus by the Interior Extremum Theorem.   We will prove the MVT by reducing it to Rolle's Theorem.   Let   The term in the bracket is the equation of the line between and .  d(x) is continuous on , differentiable on and . Thus satisfies the hypotheses of Rolle's Theorem.  it follows that   Hence .   As an illustration of the power of the MVT we will prove the following results about derivatives.    If is differentiable on an interval and satisfies for all , then for some constant .      If and are differentiable on an interval and satisfy for all then for some constant       Increasing and Decreasing  Recall that a function is increasing on an interval if whenever in . Likewise a function is decreasing on an interval if whenever in .  It is taught in Calculus class that a function is increasing whenever the derivative is positive and decreasing whenever the derivative is negative, but this is not quite right.  Consider the function    The graph of   A graph of a function that resembles a straight line away from 0, but near 0 oscillates wildly.    Let . Then .  Let be a positive integer. Then but    but   When is large and hence but . Therefore is non-increasing on every neighborhood of .    Suppose .   If on then is increasing on .    If on then is decreasing on .         The Generalized Mean Value Theorem  There is a more general statement of the MVT, whose proof is also due to Cauchy. For this reason it is often referred to as Cauchy's Mean Value Theorem.   Generalized Mean Value Theorem   If and are continuous on the closed interval and differentiable on the open interval then there exists a point where     If is never zero on then the conclusion can be stated as    We will apply the MVT to the function .     Intermediate Forms and L'Hopital's Rule  Consider the following limits.    If we try to evaluate the first limit we end up with both numerator and denominator going to . This is called an indeterminate form of type   If we try to evaluate the second limit we end up with the numerator going to and the denominator going to . This is called an indeterminate form of type   Before proceeding, let's formally define what is meant for a limit to be .    Given and a limit point of , we say that if for every there exists such that whenever it follows that .    The definition for is similar.   L'hopital's Rule ( case)   Let and be continuous on an interval containing and suppose and are differentiable on this interval with the possible exception of the point . If and for all then      L'hopital's Rule ( case)   Let and be differentiable on an interval containing with the possible exception of the point . If (or and for all then     L'Hospital's rule works because if and are two differentiable functions whose graph approaches as then the tangent lines to the graphs at are close to the functions themselves, so we can replace the functions by their tangent lines at .  Recall that is the slope of the tangent line to and is the slope of the tangent line to . Thus    L'hopital's Rule works because the slopes of the tangent lines to and are almost the same as the slopes of the functions themselves   A graph of a parabola and a square root function which intersects it at the point . A tangent line to the parabola and a tangent line to the square root function are shown intersecting at the point    The first proof of L'Hospitals's rule appeared in L'Hospital's 1696 book \\textit{Infinitesimal Analysis to Understand Curved Lines}, which was the first ever calculus textbook; however, the proof of L'Hospital's rule was due to Johann Bernoulli.  L'Hospital had earlier made the following proposition to Bernoulli. I will be happy to give you a retainer of 300 pounds, beginning with the first of January of this year. ... I promise shortly to increase this retainer, which I know is very modest, as soon as my affairs are somewhat straightened out. ... I am not so unreasonable as to demand in return all of your time, but I will ask you to give me at intervals some hours of your time to work on what I request and also to communicate to me your discoveries, at the same time asking you not to disclose any of them to others.   We will first prove the case using the Generalized MVT   Consider the interval . By the Generalized MVT for each there exists such that   Taking the limit as yields   The limit as is similar.   Now we will prove the case of L'Hospital's rule   Let . Then since , there exists such that for all .  Let . Note that is a fixed number throughout the remainder of the proof.  For any the Generalized MVT yields for some .  It thus follows from the choice of that   Our goal is to show that   To achieve this from what we have, we want to multiply by . To make sure that this quantity is positive note that since , we can choose so that for all .  Performing the desired multiplication results in   After some algebra this reduces to   Since is fixed and there exists such that for , and are both less than in absolute value.  If then for all .    "
},
{
  "id": "notes-week-02-2-4",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-4",
  "type": "Figure",
  "number": "15",
  "title": "",
  "body": " Different Paths to sail across the Atlantic Ocean   A picture of the Atlantic Ocean with two paths starting at New York and ending at Ireland. One path is a straight line, while the other bends and curves.   "
},
{
  "id": "thm-MVT",
  "level": "2",
  "url": "notes-week-02.html#thm-MVT",
  "type": "Theorem",
  "number": "16",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem   If be continuous on and differentiable on . If , then there exists a point where    "
},
{
  "id": "thm-Rolle",
  "level": "2",
  "url": "notes-week-02.html#thm-Rolle",
  "type": "Theorem",
  "number": "17",
  "title": "Rolle’s Theorem.",
  "body": " Rolle's Theorem   Let be continuous on and differentiable on . If , then there exists a point such that .   "
},
{
  "id": "notes-week-02-2-12",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-12",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Since is a continuous function on a compact set, contains both a minimum and a maximum. If these occur at the endpoints, then the function is constant and we are done.  If not, there is either a maximum or minimum at . Thus by the Interior Extremum Theorem.  "
},
{
  "id": "notes-week-02-2-14",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-2-14",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Let   The term in the bracket is the equation of the line between and .  d(x) is continuous on , differentiable on and . Thus satisfies the hypotheses of Rolle's Theorem.  it follows that   Hence .  "
},
{
  "id": "cor-MVT1",
  "level": "2",
  "url": "notes-week-02.html#cor-MVT1",
  "type": "Corollary",
  "number": "18",
  "title": "",
  "body": "  If is differentiable on an interval and satisfies for all , then for some constant .   "
},
{
  "id": "cor-MVT2",
  "level": "2",
  "url": "notes-week-02.html#cor-MVT2",
  "type": "Corollary",
  "number": "19",
  "title": "",
  "body": "  If and are differentiable on an interval and satisfy for all then for some constant    "
},
{
  "id": "notes-week-02-3-5",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-3-5",
  "type": "Figure",
  "number": "20",
  "title": "",
  "body": " The graph of   A graph of a function that resembles a straight line away from 0, but near 0 oscillates wildly.   "
},
{
  "id": "thm-Increasing-Decreasing",
  "level": "2",
  "url": "notes-week-02.html#thm-Increasing-Decreasing",
  "type": "Theorem",
  "number": "21",
  "title": "",
  "body": "  Suppose .   If on then is increasing on .    If on then is decreasing on .      "
},
{
  "id": "thm-GMVT",
  "level": "2",
  "url": "notes-week-02.html#thm-GMVT",
  "type": "Theorem",
  "number": "22",
  "title": "Generalized Mean Value Theorem.",
  "body": " Generalized Mean Value Theorem   If and are continuous on the closed interval and differentiable on the open interval then there exists a point where    "
},
{
  "id": "notes-week-02-4-5",
  "level": "2",
  "url": "notes-week-02.html#notes-week-02-4-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We will apply the MVT to the function .  "
},
{
  "id": "def-",
  "level": "2",
  "url": "notes-week-02.html#def-",
  "type": "Definition",
  "number": "23",
  "title": "",
  "body": "  Given and a limit point of , we say that if for every there exists such that whenever it follows that .   "
},
{
  "id": "thm-Lhopital",
  "level": "2",
  "url": "notes-week-02.html#thm-Lhopital",
  "type": "Theorem",
  "number": "24",
  "title": "L’hopital’s Rule (<span class=\"process-math\">\\(\\frac{0}{0}\\)<\/span> case).",
  "body": " L'hopital's Rule ( case)   Let and be continuous on an interval containing and suppose and are differentiable on this interval with the possible exception of the point . If and for all then    "
},
{
  "id": "thm-Lhopital2",
  "level": "2",
  "url": "notes-week-02.html#thm-Lhopital2",
  "type": "Theorem",
  "number": "25",
  "title": "L’hopital’s Rule (<span class=\"process-math\">\\(\\frac{\\infty}{\\infty}\\)<\/span> case).",
  "body": " L'hopital's Rule ( case)   Let and be differentiable on an interval containing with the possible exception of the point . If (or and for all then    "
},
{
  "id": "subsec-Intermediate-Forms-and-LHopitals-Rule-12",
  "level": "2",
  "url": "notes-week-02.html#subsec-Intermediate-Forms-and-LHopitals-Rule-12",
  "type": "Figure",
  "number": "26",
  "title": "",
  "body": " L'hopital's Rule works because the slopes of the tangent lines to and are almost the same as the slopes of the functions themselves   A graph of a parabola and a square root function which intersects it at the point . A tangent line to the parabola and a tangent line to the square root function are shown intersecting at the point   "
},
{
  "id": "subsec-Intermediate-Forms-and-LHopitals-Rule-16",
  "level": "2",
  "url": "notes-week-02.html#subsec-Intermediate-Forms-and-LHopitals-Rule-16",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Consider the interval . By the Generalized MVT for each there exists such that   Taking the limit as yields   The limit as is similar.  "
},
{
  "id": "subsec-Intermediate-Forms-and-LHopitals-Rule-18",
  "level": "2",
  "url": "notes-week-02.html#subsec-Intermediate-Forms-and-LHopitals-Rule-18",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Let . Then since , there exists such that for all .  Let . Note that is a fixed number throughout the remainder of the proof.  For any the Generalized MVT yields for some .  It thus follows from the choice of that   Our goal is to show that   To achieve this from what we have, we want to multiply by . To make sure that this quantity is positive note that since , we can choose so that for all .  Performing the desired multiplication results in   After some algebra this reduces to   Since is fixed and there exists such that for , and are both less than in absolute value.  If then for all .  "
},
{
  "id": "notes-week-03",
  "level": "1",
  "url": "notes-week-03.html",
  "type": "Section",
  "number": "",
  "title": "Week 3: A Continuous Nowhere Differentiable Function (5.4)",
  "body": " Week 3: A Continuous Nowhere Differentiable Function (5.4)    Non-differentiability  We saw that the absolute value function fails to be differentiable at because of the sharp corner at .  Given a finite set of points, it is possible to construct a continuous function with a sharp corner at each point and thus we have a continuous function that fails to be differentiable at a finite set of points.  It is possible to construct a continuous function that is nondifferentiable at infinitely many points. Let on the interval and then extend to all through the relation . This function is nondifferentiable at all the integers.   A continuous function that is non-differentiable at infinitely many points.   A picture of a continuous function that is non-differentiable at infinitely many points. The function looks like an infinitely long row of teeth and is not differentiable at the point of each tooth.    Is it possible to construct a function that is continuous everywhere but that is non-differentiable at uncountably many points?  Around 1830 Bernard Bolzano constructed a function that is continuous everywhere but fails to be differentiable at every point in ; however, he never published this result.  About 1860 Charles Cellerier constructed another function that is everywhere continuous but nowhere differentiable. He also never published his result.  The first published example of a function that is everywhere continuous and nowhere differentiable is due to Karl Weierstrass in 1872.   Weierstrass' example of a function that is everywhere continuous but nowhere differentiable.   A picture of the graph of a function that consists entirely of jagged edges. One of the edges is zoomed in to show that inside the edges the function has the same shape as the entire graph, which demonstrates the fractal nature of this graph.    Quotes about the Weierstrass Function:    An outrage against common sense -- Henri Poincare     I turn with terror and horror from this lamentable scourge of functions with no derivatives. -- Charles Hermite     [Up to that time] one would have said that a continuous function is essentially capable of being represented by a curve, and that a curve has always a tangent. Such reasoning has no mathematical value whatever; it is founded on intuition, or rather on a visible representation. ... By the discovery of this striking example Weierstrass has accordingly given us a useful reminder, and has taught us better to appreciate the faultless and purely arithmetical methods with which he more than any one has enriched our science. -- Henri Poincare     Although nowhere differentiable continuous functions were created to challenge previously held beliefs in mathematics, they do have important physical applications.  In 1905 Albert Einstein published a paper which demonstrated the existence of atoms. In this paper Einstein showed that atoms exhibit Brownian Motion which means that they follow a random path because they are constantly bombarded by other particles which changes their direction of motion.  Because of this randomness, the path of an object that exhibits Brownian motion can't be modeled by a smooth curve. One must use a continuous non-differentiable function to model Brownian motion.  Weierstrass' original function was the function where and are carefully chosen real numbers.  The Weierstrass function is an example of a Fourier series, which is an infinite sum of sines and cosines.  Remarkably the Weierstrass function is nowhere differentiable despite the fact that the functions in the sum are infinitely differentiable everywhere.  We will give another example of an everywhere continuous nowhere differentiable function. Recall that on and is extended to all by the functional equation .  Let .  Let   We will show that is continuous on all but differentiable nowhere.  The graph below shows in orange, in green and in blue.   The first 3 terms of .   A picture of the graphs of three functions. The first in orange is the graph of . It looks like a triangle starting at , which rises up to before falling down to . Then it repeats indefinitely. The second graph in green is the graph of . It looks like a triangle starting at that rises up to before falling down to . Then it repeats this pattern indefinitely. The final graph in blue is the graph of . It is a triangle that starts at and rises to before falling to . The it repeats indefinitely      Continuity of  We first need to show that is well defined for all by showing that the infinite sum converges for all .  Since , . Hence by the comparison test Thus is defined for all .  Since is continuous it follows from the algebraic limit theorem that the finite sum is continuous.  It is not necessarily the case that an infinite sum of continuous functions will still be continuous. Determining when the limit of a sequence of continuous functions or an infinite sum of functions is continuous will be one of the main goals of Chapter 6.  After that chapter we will see that this particular sum is in fact continuous on all     Non-differentiability of  We will first show that is not differentiable at . Consider the sequence , where   It follows from the definition of the derivative that if is differentiable at then   There are three cases to consider:    : Then is a multiple of 2 and thus     Case 2: : Then so .    Case 3: : Then and hence .     Putting this all together we get   Since the limit is undefined, does not exist and is not differentiable at .  A similar argument shows that does not exist whenever is a rational number of the form where is an integer and is a positive integer.  These points are called dyadic points. Because the dyadic points are dense in the real numbers there is reason to suppose that is non-differentiable at every real number.  Suppose that is not a dyadic number. Then for a fixed value of  lies between 2 adjacent dyadic points   Set and . Repeating this for each yields sequences and such that and     If and are sequences satisfying and then         Let . Then as so But . Thus    We will use the lemma to show that can't exist for all . Recall that and are sequences such that and .  Thus if exists then by the lemma   Now   If , then .  If then , where the sign depends on whether lies on a line segment with positive slope or negative slope.  Finally = if is odd and if is even.  For everything is the same except that if is odd and if is even.  Thus if is even and if is odd.  Therefore where the sign is positive if is even and negative if is odd.  Since this sequence alternates between and , the limit doesn't exist and thus is not differentiable at . Since was arbitrary, this shows that is nowhere differentiable.   "
},
{
  "id": "subsection-3-1-5",
  "level": "2",
  "url": "notes-week-03.html#subsection-3-1-5",
  "type": "Figure",
  "number": "27",
  "title": "",
  "body": " A continuous function that is non-differentiable at infinitely many points.   A picture of a continuous function that is non-differentiable at infinitely many points. The function looks like an infinitely long row of teeth and is not differentiable at the point of each tooth.   "
},
{
  "id": "subsection-3-1-10",
  "level": "2",
  "url": "notes-week-03.html#subsection-3-1-10",
  "type": "Figure",
  "number": "28",
  "title": "",
  "body": " Weierstrass' example of a function that is everywhere continuous but nowhere differentiable.   A picture of the graph of a function that consists entirely of jagged edges. One of the edges is zoomed in to show that inside the edges the function has the same shape as the entire graph, which demonstrates the fractal nature of this graph.   "
},
{
  "id": "subsection-3-1-23",
  "level": "2",
  "url": "notes-week-03.html#subsection-3-1-23",
  "type": "Figure",
  "number": "29",
  "title": "",
  "body": " The first 3 terms of .   A picture of the graphs of three functions. The first in orange is the graph of . It looks like a triangle starting at , which rises up to before falling down to . Then it repeats indefinitely. The second graph in green is the graph of . It looks like a triangle starting at that rises up to before falling down to . Then it repeats this pattern indefinitely. The final graph in blue is the graph of . It is a triangle that starts at and rises to before falling to . The it repeats indefinitely   "
},
{
  "id": "lem-nondiff",
  "level": "2",
  "url": "notes-week-03.html#lem-nondiff",
  "type": "Lemma",
  "number": "30",
  "title": "",
  "body": "  If and are sequences satisfying and then    "
},
{
  "id": "subsubsec-3-3-12",
  "level": "2",
  "url": "notes-week-03.html#subsubsec-3-3-12",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "    Let . Then as so But . Thus   "
},
{
  "id": "notes-week-04",
  "level": "1",
  "url": "notes-week-04.html",
  "type": "Section",
  "number": "",
  "title": "Week 4: Uniform Convergence of a sequence of functions (6.1-6.2)",
  "body": " Week 4: Uniform Convergence of a sequence of functions (6.1-6.2)   Function Approximation  Given a relatively complicated function we might wish to approximate it by simpler functions such as polynomials, rational functions, trigonometric functions or exponential functions. This way we could simplify calculations involving the more complicated function.  There are several noteworthy results which show how a large number of functions can be approximated by relatively simple functions.   Taylor series: Given a function that is infinitely differentiable at a point there is a sequence of polynomials that approximates near .    Fourier series: Similar to a Taylor series but with sines and cosines (or complex exponentials) used as approximants instead of polynomials.    Runge's Theorem (1885): If is a compact subset of the complex plane then every function that is analytic (i.e. complex differentiable) in a neighborhood of can be uniformly approximated by a sequence of rational functions.    Weierstrass Approximation Theorem (1885): Every continuous function on can be uniformly approximated by polynomials.    Mergelyan's Theorem (1951): Let be a compact subset of the complex plane such that is connected. Then every function analytic on a neighborhood of can be uniformly approximated by polynomials.     A function can be approximated by polynomials (rational functions) if there is a sequence of polynomials (rational functions) that converges to .  Given one of these approximations, we might ask which properties of the approximating functions extend to the limit functions. For example   If is the limit of a Fourier series, is a continuous function?    If is the limit of a sequence of polynomials, is necessarily a differentiable?    In this chapter, we will investigate these and other questions concerning approximation.       Pointwise Convergence  The first thing we need to do to build up a theory of function approximation is to define what it means for a sequence of functions to converge.  As it turns out, there are multiple different ways that we can define what it means for a sequence of functions to converge. We will start by extending the notion of converge of a sequence from last semester.    For each let be a function defined on a set . The sequence  converges pointwise on to a function if for all , the sequence of real numbers converges to .    In this case we write , , or   The questions that we've raised about whether the limit of a sequence of continuous (or differentiable) functions is itself continuous (or differentiable) is really a question about when we are allowed to interchange limits.  Suppose and each is continuous at . For to be continuous at , we must show that   Note that but only if the interchange of limits is justified.    Examples  Let . For each , . Thus converges pointwise to .  The graph shows , , , , , and .     f1(x)=x  f2(x)=x\/2  f3(x)=x\/3  f4(x)=x\/4  f5(x)=x\/5  f20(x)=x\/20                          Let on the interval . If then as , but if then as .  Thus converges pointwise to the piecewise function   Note that this example is a sequence of continuous functions that converge to a function which is discontinuous at .     f1(x)=x  f2(x)=x^2  f3(x)=x^3  f4(x)=x^4  f5(x)=x^5  f20(x)=x^(20)                          Let on the interval . Then for a fixed in , .  Note that this example is a sequence of differentiable functions that converge to a function which is not differentiable at .     f1(x)=x^(2)  f2(x)=cbrt(x)^4  f3(x)=cbrt(cbrt(cbrt(cbrt(x))))^(96)  f4(x)=cbrt(cbrt(cbrt(cbrt(cbrt(x)))))^(280)  f5(x)=cbrt(cbrt(x))^(10)  f20(x)=cbrt(cbrt(cbrt(cbrt(cbrt(cbrt(x))))))^(760)                            Uniform Convergence  The second example shows that if a sequence of continuous functions converges pointwise to a limit function, the limit function is not necessarily a continuous function.  Cauchy 1821: Theorem that if a sum of continuous functions converges then the limit function is continuous.  Abel 1826: Cauchy's theorem admits exceptions such as , which is discontinuous at every value of , where is an integer.  It has been argued; however, that Cauchy's theorem is not wrong and that Cauchy knew about Abel's exception but it is not a counterexample to his theorem.  The issue involves what did Cauchy mean by a convergent sum. Abel interpreted Cauchy's theorem as pointwise convergence, which is false as his exception shows.  However, Cauchy may have meant for convergence to mean a stronger type than pointwise convergence, which today is called uniform convergence.  Abel's exception is not uniformly convergent and thus would not be a counterexample to Cauchy's theorem. In fact, Cauchy's theorem is correct if the convergence is uniform convergence.  Before introducing the definition of uniform convergence, let's restate the definition of pointwise convergence in terms of .    Let be a sequence of functions defined on a set . Then converges pointwise on to a limit defined on if, for every and , there exists (perhaps dependent on ) such that whenever .    Notice that the choice of may depend on the point .    Let be a sequence of functions on a set . Then converges uniformly on to a limit function defined on if for every there exists such that whenever and .    The difference between uniform and convergence and pointwise convergence is that in uniform convergence for each a single must work for all while in pointwise convergence for each and different choices of may be used.  Let . Show that converges uniformly to on .     f1(x)=sin(x)  f2(x)=sin(x)\/2  f3(x)=sin(x)\/3  f4(x)=sin(x)\/4  f5(x)=sin(x)\/5  f20(x)=sin(x)\/20                          We saw that the sequence converges pointwise on to   Let's show that this sequence does not converge uniformly on . For this, suppose and .  If the convergence was uniform then we would be able to find depending only on such that when . But   If then   But this means that depends on the choice of (note that as , ) and thus the convergence is not uniform.    Uniform Convergence and Continuity  In the two examples of sequences of continuous functions that converge to a limit function that is not continuous, the convergence has been pointwise convergence but not uniform convergence. In fact, if a sequence of continuous functions converges uniformly, then the limit function will also be continuous.   Continuous Limit Theorem   Let be a sequence of functions defined on that converges uniformly on to a function . If each is continuous at , then is continuous at .     Let be fixed and let . It follows from the definition of uniform continuity that there exists such that whenever .  Because is continuous at , there exists such that whenever .  We want to show that can be made arbitrarily small by choosing sufficiently small.  Putting this all together we get that if    Since can be made arbitrarily small, so can and thus is continuous at .   Something to consider: If convergence is only pointwise, where does the proof break down?    Cauchy Criterion  There is a Cauchy criterion for uniform convergence similar to the one for sequences.    A sequence of functions converges uniformly on if and only if for every there exists such that whenever and .     "
},
{
  "id": "def-pointwise",
  "level": "2",
  "url": "notes-week-04.html#def-pointwise",
  "type": "Definition",
  "number": "31",
  "title": "",
  "body": "  For each let be a function defined on a set . The sequence  converges pointwise on to a function if for all , the sequence of real numbers converges to .   "
},
{
  "id": "def-pointwise-convergence-epsilon",
  "level": "2",
  "url": "notes-week-04.html#def-pointwise-convergence-epsilon",
  "type": "Definition",
  "number": "32",
  "title": "",
  "body": "  Let be a sequence of functions defined on a set . Then converges pointwise on to a limit defined on if, for every and , there exists (perhaps dependent on ) such that whenever .   "
},
{
  "id": "def-uniform-convergence",
  "level": "2",
  "url": "notes-week-04.html#def-uniform-convergence",
  "type": "Definition",
  "number": "33",
  "title": "",
  "body": "  Let be a sequence of functions on a set . Then converges uniformly on to a limit function defined on if for every there exists such that whenever and .   "
},
{
  "id": "thm-Continuous-Limit",
  "level": "2",
  "url": "notes-week-04.html#thm-Continuous-Limit",
  "type": "Theorem",
  "number": "34",
  "title": "Continuous Limit Theorem.",
  "body": " Continuous Limit Theorem   Let be a sequence of functions defined on that converges uniformly on to a function . If each is continuous at , then is continuous at .   "
},
{
  "id": "subsec-Uniform-Convergence-and-Continuity-4",
  "level": "2",
  "url": "notes-week-04.html#subsec-Uniform-Convergence-and-Continuity-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be fixed and let . It follows from the definition of uniform continuity that there exists such that whenever .  Because is continuous at , there exists such that whenever .  We want to show that can be made arbitrarily small by choosing sufficiently small.  Putting this all together we get that if    Since can be made arbitrarily small, so can and thus is continuous at .  "
},
{
  "id": "thm-Cauchy-Criterion",
  "level": "2",
  "url": "notes-week-04.html#thm-Cauchy-Criterion",
  "type": "Theorem",
  "number": "35",
  "title": "",
  "body": "  A sequence of functions converges uniformly on if and only if for every there exists such that whenever and .   "
},
{
  "id": "notes-week-05",
  "level": "1",
  "url": "notes-week-05.html",
  "type": "Section",
  "number": "",
  "title": "Week 5: Uniform convergence and differentiation and series of functions (6.3-6.4)",
  "body": " Week 5: Uniform convergence and differentiation and series of functions (6.3-6.4)   Convergence of Derivatives  Suppose is a sequence of functions that converges (in some sense) to a limit function . Under what conditions will the sequence of derivatives converge to ?  This is an important problem in approximation theory If we are approximating a function by polynomials we want to be sure that the derivatives of the polynomials will be close to the derivative of the limit function.  As an example, let . Verify that converges uniformly to , but is undefined.     f1(x)=sin(x)  f2(x)=sin(2*x)\/2  f3(x)=sin(3*x)\/3  f4(x)=sin(4*x)\/4  f5(x)=sin(5*x)\/5  f20(x)=sin(20*x)\/20                             f1(x)=cos(x)  f2(x)=cos(2*x)  f3(x)=cos(3*x)  f4(x)=cos(4*x)  f5(x)=cos(5*x)  f20(x)=cos(20*x)                          For another example, let on the interval . Verify that converges uniformly to a limit function on , and that converges pointwise to a limit function on , but .     f1(x)=x  f2(x)=x^2\/2  f3(x)=x^3\/3  f4(x)=x^4\/4  f5(x)=x^5\/5  f20(x)=x^(20)\/20                             f1(x)=1  f2(x)=x  f3(x)=x^2  f4(x)=x^3  f5(x)=x^4  f20(x)=x^(19)                            Differentiable Limit Theorem  These examples show that in order for the sequence of derivatives to converge to the derivative of the limit function, it is not enough that the sequence of functions converges uniformly to the limit function. It is not even enough that the sequence of functions converges uniformly to the limit function and the sequence of derivatives converges pointwise.   Differentiable Limit Theorem   Let pointwise on the closed interval and assume that each is differentiable. If converges uniformly on to a function , then the function is differentiable and .     Choose and let . We want to show that exists and equals .  This means we must find such that whenever ,   The triangle inequality implies that   The first term on the right can be made arbitrarily small because converges to . The second term can be made arbitrarily small because is the derivative of at . The last term can be made arbitrarily small because converges uniformly to .  We'll start with bounding the last term. By uniform convergence, there exists such that for all .  In addition using the Cauchy criterion for uniform convergence we have that there exists such that when , for all .  Let .  Now let's bound the middle term. The function is differentiable at and hence there exists such that whenever ,   Now fix satisfying . It just remains to bound the first term which we will do with the help of the Mean Value Theorem.  Applying the MVT to the function on the interval (or ) yields that there exists in the interval such that   Since , . Hence   Therefore   Since converges to taking the limit as yields   Finally combining , and gives that for     In the statement of the Differentiable Limit Theorem, it is not necessary to have that converges pointwise to on all ; it is just enough for it to converge at a single point.    Let be a sequence of differentiable functions defined on the closed interval and suppose converges uniformly to a function . If there exists a point for which is convergent, then converges uniformly. Moreover the limit function is differentiable and satisfies .      The Kerala School of Astronomy and Mathematics  Kerala is a region of southwest India. During the 14th century A.D. a group of astronomers and mathematicians led by Madhava of Sangamagrama founded a school which today is known as the Kerala School of Astronomy and Mathematics.  While they were focused on solving astronomical problems, they discovered a number of important mathematical results including formulas for calculating sines and cosines.  The remarkable feature of these formulas is that they involve infinite sums.  Madhava (died 1425 A.D.) gave the following instructions for calculating the sine function.  \"Multiply the arc by the square of the arc, and take the result of repeating that (any number of times). Divide (each of the above numerators) by the squares of the successive even numbers increased by that number and multiplied by the square of the radius. Place the arc and the successive results so obtained one below the other, and subtract each from the one above. These together give the jiva, as collected together in the verse beginning with \"vidvan\" etc.\"    In Indian mathematics at the time the jiva referred to the function where is a fixed radius of a circle.  In modern mathematical notation, Madhava's formula is as follows. where is the product of , , \\ldots 1.  Another remarkable formula due to Madhava is a method for calculating the arctangent function. In the passage below sine and cosine refer to the Indian sine ( ) and Indian cosine (   \"The first term is the product of the given sine and radius of the desired arc divided by the cosine of the arc. The succeeding terms are obtained by a process of iteration when the first term is repeatedly multiplied by the square of the sine and divided by the square of the cosine. All the terms are then divided by the odd numbers 1, 3, 5, .... The arc is obtained by adding and subtracting respectively the terms of odd rank and those of even rank. It is laid down that the sine of the arc or that of its complement whichever is the smaller should be taken here as the given sine. Otherwise the terms obtained by this above iteration will not tend to the vanishing magnitude\"    In modern notation this would be written as   By letting Madhava came up with a formula for calculating    Madhava's formula's demonstrate that a series of simple functions can be a powerful tool for approximating more complicated functions. However, there are a number of issues that we need to address.   In what sense do Madhava's series converge to the desired function?    In general, if a series of continuous functions converges, is the limit function also continuous?    In general, if a series of differentiable functions converges, is the limit function also differentiable?    Are we justified in substituting into Madhava's series for to get a formula for ?       Series of Functions  We start our investigation into series of functions by defining what it means for a series of functions to converge.    For each , let and be functions defined on a set . The infinite series converges pointwise on to if the sequence of partial sums defined by converges pointwise to .  The series converges uniformly on to if the sequence converges uniformly on to .  In either case we write or always being explicit about the type of convergence involved.    Example: Show that converges uniformly to on the interval .  The following image shows the graph of      f1(x)=x  f2(x)=x+x\/2  f3(x)=x+x\/2+x\/4  f4(x)=x+x\/2+x\/4+x\/8  f5(x)=x+x\/2+x\/4+x\/8+x\/16  f20(x)=2x                          Show that converges pointwise to on the interval , but the convergence is not uniform.  The following graph shows the partial sums for different values of as well as      f1(x)=1  f2(x)=1+x  f3(x)=1+x+x^2  f4(x)=1+x+x^2+x^3  f5(x)=1+x+x^2+x^3+x^4  f20(x)=1+x+x^2+x^3+x^4+x^5+x^6+x^7+x^8+x^9+x^(10)+x^(11)+x^(12)+x^(13)+x^(14)+x^(15)+x^(16)+x^(17)+x^(18)+x^(19)  f(x) = 1\/(1-x)                            Since series convergence is defined by convergence of partial sums, the theorems that we proved for the continuity and differentiability of limits of sequences of functions also hold for series of functions.   Term-by-term Continuity Theorem   Let be continuous functions defined on a set and suppose conveges uniformly on to a function . Then is continuous on .     Term-by-term Differentiability Theorem   Let be differentiable functions defined on an interval and suppose converges uniformly to a limit on . If there exists a point where converges, then the series converges uniformly to a differentiable function satisfying on . In other words,      Cauchy Criterion for Uniform C0nvergence of Series   A series converges uniformly on if and only if for every there exists an such that whenever and      Weierstrass M-test   For each , let be a function defined on a set , and let be a real number satisfying for all . If converges then converges uniformly on .     Choose . Because converges and all terms are positive, it follows from the Cauchy criterion that there exists such that for    But by the triangle inequality for    Hence by the Cauchy criterion converges uniformly on .    "
},
{
  "id": "thm-Differentiable-Limit",
  "level": "2",
  "url": "notes-week-05.html#thm-Differentiable-Limit",
  "type": "Theorem",
  "number": "36",
  "title": "Differentiable Limit Theorem.",
  "body": " Differentiable Limit Theorem   Let pointwise on the closed interval and assume that each is differentiable. If converges uniformly on to a function , then the function is differentiable and .   "
},
{
  "id": "subsec-Differentiable-Limit-4",
  "level": "2",
  "url": "notes-week-05.html#subsec-Differentiable-Limit-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Choose and let . We want to show that exists and equals .  This means we must find such that whenever ,   The triangle inequality implies that   The first term on the right can be made arbitrarily small because converges to . The second term can be made arbitrarily small because is the derivative of at . The last term can be made arbitrarily small because converges uniformly to .  We'll start with bounding the last term. By uniform convergence, there exists such that for all .  In addition using the Cauchy criterion for uniform convergence we have that there exists such that when , for all .  Let .  Now let's bound the middle term. The function is differentiable at and hence there exists such that whenever ,   Now fix satisfying . It just remains to bound the first term which we will do with the help of the Mean Value Theorem.  Applying the MVT to the function on the interval (or ) yields that there exists in the interval such that   Since , . Hence   Therefore   Since converges to taking the limit as yields   Finally combining , and gives that for    "
},
{
  "id": "thm-differentiable-limit-2",
  "level": "2",
  "url": "notes-week-05.html#thm-differentiable-limit-2",
  "type": "Theorem",
  "number": "37",
  "title": "",
  "body": "  Let be a sequence of differentiable functions defined on the closed interval and suppose converges uniformly to a function . If there exists a point for which is convergent, then converges uniformly. Moreover the limit function is differentiable and satisfies .   "
},
{
  "id": "def-series-convergence",
  "level": "2",
  "url": "notes-week-05.html#def-series-convergence",
  "type": "Definition",
  "number": "38",
  "title": "",
  "body": "  For each , let and be functions defined on a set . The infinite series converges pointwise on to if the sequence of partial sums defined by converges pointwise to .  The series converges uniformly on to if the sequence converges uniformly on to .  In either case we write or always being explicit about the type of convergence involved.   "
},
{
  "id": "thm-term-by-term-continuity",
  "level": "2",
  "url": "notes-week-05.html#thm-term-by-term-continuity",
  "type": "Theorem",
  "number": "39",
  "title": "Term-by-term Continuity Theorem.",
  "body": " Term-by-term Continuity Theorem   Let be continuous functions defined on a set and suppose conveges uniformly on to a function . Then is continuous on .   "
},
{
  "id": "thm-term-by-term-differeniability",
  "level": "2",
  "url": "notes-week-05.html#thm-term-by-term-differeniability",
  "type": "Theorem",
  "number": "40",
  "title": "Term-by-term Differentiability Theorem.",
  "body": " Term-by-term Differentiability Theorem   Let be differentiable functions defined on an interval and suppose converges uniformly to a limit on . If there exists a point where converges, then the series converges uniformly to a differentiable function satisfying on . In other words,    "
},
{
  "id": "thm-cauchy-criterion-uniform",
  "level": "2",
  "url": "notes-week-05.html#thm-cauchy-criterion-uniform",
  "type": "Theorem",
  "number": "41",
  "title": "Cauchy Criterion for Uniform C0nvergence of Series.",
  "body": " Cauchy Criterion for Uniform C0nvergence of Series   A series converges uniformly on if and only if for every there exists an such that whenever and    "
},
{
  "id": "thm-M-test",
  "level": "2",
  "url": "notes-week-05.html#thm-M-test",
  "type": "Theorem",
  "number": "42",
  "title": "Weierstrass M-test.",
  "body": " Weierstrass M-test   For each , let be a function defined on a set , and let be a real number satisfying for all . If converges then converges uniformly on .   "
},
{
  "id": "subsec-series-of-functions-15",
  "level": "2",
  "url": "notes-week-05.html#subsec-series-of-functions-15",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Choose . Because converges and all terms are positive, it follows from the Cauchy criterion that there exists such that for    But by the triangle inequality for    Hence by the Cauchy criterion converges uniformly on .  "
},
{
  "id": "notes-week-06",
  "level": "1",
  "url": "notes-week-06.html",
  "type": "Section",
  "number": "",
  "title": "Week 6: Power Series (6.5)",
  "body": " Week 6: Power Series (6.5)   The Binomial Series  The Binomial Theorem demonstrates the correct way to expand the powers of a binomial. where   It is sometimes written as the special case   Around 1665 Newton generalized the Binomial Theorem for the case when is not an integer. When this happens the sum becomes an infinite series. where   However, Newton never provided a proof of this result!  In his 1821 book Cours d'analyse Cauchy gave a proof that the binomial series converges to . Abel was interested in further generalizing the Binomial Theorem to complex exponents and carefully studied Cauchy's proof, which led him to discover a flaw in the proof.  Cauchy's proof relies on the fact that is a continuous function on , which he claimed followed because the limit of a sum of continuous functions is continuous.  In an 1826 paper Abel presented an example that the showed that the limit of a sum of continuous functions is not always continuous and thus Cauchy's proof is incomplete unless the sum converges uniformly. Abel also showed a way to fix Cauchy's proof if this isn't the case.    Power Series  To determine whether the Binomials series is uniformly convergent or not we need to build up some theory involving power series. A power series is a function of the form   The binomial series is an example of a power series.  Another example is the series   Show that converges when . What happens if ? What if ?  In the previous example, the set of points where the series converges was the interval . As it turns out the set where a power series converges is always an interval centered at or the single point .In the previous example, the set of points where the series converges was the interval . As it turns out the set where a power series converges is always an interval centered at or the single point .    If a power series converges at some point , then it converges absolutely for any satisfying .     Suppose converges. Then the sequence of terms converges to and thus is bounded.  Hence there exists such that for all .  Suppose . Then,   Hence it follows from the comparison test that   Since this is a geometric series with and thus converges.  Hence converges absolutely.   As previously mentioned a consequence of this theorem is that the set of points where a power series converges is either an interval of the form , , or or all or .  This set is referred to as the interval of convergence of the power series and the number is called the radius of convergence.  When the interval of convergence is the radius of convergence is said to be and when the interval of convergence is , the radius of convergence is said to be .    The Ratio Test  The Ratio Test is a test for series convergence which is useful for determining the radius of convergence of power series. }  The Ratio Test   Let be a sequence of nonzero real numbers.    If there exists with and such that for , then the series is absolutely convergent.    If there exists such that for , then the series is divergent.       We first prove part 1. Suppose for . Then   Thus and since this is a geometric series with , converges absolutely by the comparison test.  Now we prove part 2. Suppose for . Then   Thus and thus the series diverges.     Let be a nonzero sequence in and suppose that the limit exists. Then is absolutely convergent when and divergent when .    If then the ratio test is inconclusive. The series may converge absolutely, converge conditionally, or diverge.  Example: Find the interval of convergence and radius of convergence of the following power series.   Example: Find the interval of convergence and radius of convergence of the following power series.     Uniform Convergence  Let's consider again the problem of proving that the Binomial series converges. Cauchy showed that if the series is a continuous function then it must converge to .  We can show that is continuous by showing that the convergence is uniform.    If a power series converges absolutely at a point , then it converges uniformly on the closed interval where .     Recall the Weierstrass M-test states that if and converges then converges uniformly.  Suppose . Then and since converges absolutely, it follows from the M-test that converges uniformly.   Show that the Binomial Series converges absolutely (and hence uniformly) when and diverges when .  It thus follows that is continuous on and thus by Cauchy's argument it converges to there.  We also know that is undefined when because the series diverges. This leaves open the question of what happens at the endpoints and .  In particular we want to know if is continuous at these endpoints and thus converges to there as well.  Whether the Binomial series converges at the endpoints depends on the value of .  If then the series converges absolutely at both endpoints. Hence the converges is uniform and is continuous at both endpoints.  If then the series converges conditionally at and diverges at .  If the series diverges. Hence is undefined at the endpoints.  If the Binomial series converges conditionally then we can't use the Absolute Convergence Implies Uniform Convergence Theorem to show that the Binomial series converges uniformly at . Instead we will need to use a theorem due to Abel to show that convergence at a point implies uniform convergence there as well.  Abel developed this theorem specifically to fix the flaw in Cauchy's proof that the Binomial series converges to .   Abel's Lemma   Let satisfy , and let be a series for which the partial sums are bounded. In other words, suppose there exists such that for all . Then for all ,      Abel's Theorem   Let be a power series that converges at the point . Then the series converges uniformly on the interval . A similar result holds if the series converges at .     Because we will want to make use of Abel's Lemma, we first write   Let . It follows from the Cauchy criterion that the series converges uniformly if it can be shown that there exists such that whenever we have   The hypothesis of the theorem is that converges. Hence by the Cauchy criterion there exists such that for    We can thus apply Abel's Lemma to with and   This gives    If the Binomial series converges conditionally at . Abel's Theorem tells us that it converges uniformly on and thus is continuous at .  Thus converges to on and in particular at .  The following Theorem summarizes our conclusions about when a power series is a continuous function.    Suppose converges (pointwise) on an interval . Then the function is continuous on .      Derivatives of Power Series  Suppose that defines a continuous function on a set . Is differentiable on and if so what is ?  We first observe that provided that the interchange between the differential operator and the sum is permitted.  We will justify the prior calculations by appealing to the Term-by-term differentiability Theorem. Recall that this required the original series to converge and the series of derivatives to converge uniformly.    If converges for all then the differentiated series converges at each as well. Consequently the convergence is uniform on compact sets contained in .     Choose . Then there exists such that . Since converges, it follows from the ratio test that   Hence it follows that and   Now we apply the ratio test to the series    Hence it follows from the ratio test that converges absolutely at .   Combining the previous result with the Term-by-term differentiability Theorem gives us the following conditions for a power series to be differentiable.    Suppose converges on an interval . The function is continuous on and differentiable on any open interval . The derivative is given by   Moreover, is infinitely differentiable on and the successive derivatives can be obtained via term-by-term differentiation of the appropriate series.     "
},
{
  "id": "thm-interval-of-convergence",
  "level": "2",
  "url": "notes-week-06.html#thm-interval-of-convergence",
  "type": "Theorem",
  "number": "43",
  "title": "",
  "body": "  If a power series converges at some point , then it converges absolutely for any satisfying .   "
},
{
  "id": "subsec-power-series-8",
  "level": "2",
  "url": "notes-week-06.html#subsec-power-series-8",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose converges. Then the sequence of terms converges to and thus is bounded.  Hence there exists such that for all .  Suppose . Then,   Hence it follows from the comparison test that   Since this is a geometric series with and thus converges.  Hence converges absolutely.  "
},
{
  "id": "thm-ratio-test",
  "level": "2",
  "url": "notes-week-06.html#thm-ratio-test",
  "type": "Theorem",
  "number": "44",
  "title": "The Ratio Test.",
  "body": " The Ratio Test   Let be a sequence of nonzero real numbers.    If there exists with and such that for , then the series is absolutely convergent.    If there exists such that for , then the series is divergent.     "
},
{
  "id": "subsec-Ratio-Test-4",
  "level": "2",
  "url": "notes-week-06.html#subsec-Ratio-Test-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " We first prove part 1. Suppose for . Then   Thus and since this is a geometric series with , converges absolutely by the comparison test.  Now we prove part 2. Suppose for . Then   Thus and thus the series diverges.  "
},
{
  "id": "cor-ratio",
  "level": "2",
  "url": "notes-week-06.html#cor-ratio",
  "type": "Corollary",
  "number": "45",
  "title": "",
  "body": "  Let be a nonzero sequence in and suppose that the limit exists. Then is absolutely convergent when and divergent when .   "
},
{
  "id": "thm-uniform-convergence",
  "level": "2",
  "url": "notes-week-06.html#thm-uniform-convergence",
  "type": "Theorem",
  "number": "46",
  "title": "",
  "body": "  If a power series converges absolutely at a point , then it converges uniformly on the closed interval where .   "
},
{
  "id": "subsec-Uniform-Convergence-series-5",
  "level": "2",
  "url": "notes-week-06.html#subsec-Uniform-Convergence-series-5",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Recall the Weierstrass M-test states that if and converges then converges uniformly.  Suppose . Then and since converges absolutely, it follows from the M-test that converges uniformly.  "
},
{
  "id": "lem-abel",
  "level": "2",
  "url": "notes-week-06.html#lem-abel",
  "type": "Lemma",
  "number": "47",
  "title": "Abel’s Lemma.",
  "body": " Abel's Lemma   Let satisfy , and let be a series for which the partial sums are bounded. In other words, suppose there exists such that for all . Then for all ,    "
},
{
  "id": "thm-abel",
  "level": "2",
  "url": "notes-week-06.html#thm-abel",
  "type": "Theorem",
  "number": "48",
  "title": "Abel’s Theorem.",
  "body": " Abel's Theorem   Let be a power series that converges at the point . Then the series converges uniformly on the interval . A similar result holds if the series converges at .   "
},
{
  "id": "subsec-Uniform-Convergence-series-18",
  "level": "2",
  "url": "notes-week-06.html#subsec-Uniform-Convergence-series-18",
  "type": "Proof",
  "number": "2",
  "title": "",
  "body": " Because we will want to make use of Abel's Lemma, we first write   Let . It follows from the Cauchy criterion that the series converges uniformly if it can be shown that there exists such that whenever we have   The hypothesis of the theorem is that converges. Hence by the Cauchy criterion there exists such that for    We can thus apply Abel's Lemma to with and   This gives   "
},
{
  "id": "thm-power-series-continuity",
  "level": "2",
  "url": "notes-week-06.html#thm-power-series-continuity",
  "type": "Theorem",
  "number": "49",
  "title": "",
  "body": "  Suppose converges (pointwise) on an interval . Then the function is continuous on .   "
},
{
  "id": "thm-term-by-term-differentiation",
  "level": "2",
  "url": "notes-week-06.html#thm-term-by-term-differentiation",
  "type": "Theorem",
  "number": "50",
  "title": "",
  "body": "  If converges for all then the differentiated series converges at each as well. Consequently the convergence is uniform on compact sets contained in .   "
},
{
  "id": "subsec-Derivatives-of-Power-Series-6",
  "level": "2",
  "url": "notes-week-06.html#subsec-Derivatives-of-Power-Series-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Choose . Then there exists such that . Since converges, it follows from the ratio test that   Hence it follows that and   Now we apply the ratio test to the series    Hence it follows from the ratio test that converges absolutely at .  "
},
{
  "id": "thm-power-series-derivative",
  "level": "2",
  "url": "notes-week-06.html#thm-power-series-derivative",
  "type": "Theorem",
  "number": "51",
  "title": "",
  "body": "  Suppose converges on an interval . The function is continuous on and differentiable on any open interval . The derivative is given by   Moreover, is infinitely differentiable on and the successive derivatives can be obtained via term-by-term differentiation of the appropriate series.   "
},
{
  "id": "hw1",
  "level": "1",
  "url": "hw1.html",
  "type": "Worksheet",
  "number": "",
  "title": "MTH 428\/528 Homework 1 Due January 22",
  "body": " MTH 428\/528 Homework 1 Due January 22     Supply proofs for parts (i) and (ii) of Theorem 5.2.4 (Algebraic Differentiation Theorem)    Use the definition of the derivative to show that the derivative of is when .    (Power Rule:) Consider , where , and let be an arbitrary point in . Show that .   Hint: The algebraic identity will be useful here.    Determine whether each conjecture is true or false. Provide an argument for those that are true and a counterexample for each one that is false.   If exists on an interval and is not constant, then must take on some irrational values.    If is differentiable on an interval containing zero then .       Let be defined on an interval and let .   Explain why in Definition 5.2.1 could have been given by     Suppose is open. If is differentiable at , show         "
},
{
  "id": "hw2",
  "level": "1",
  "url": "hw2.html",
  "type": "Worksheet",
  "number": "",
  "title": "MTH 428\/528 Homework 2 Due January 29",
  "body": " MTH 428\/528 Homework 2 Due January 29     Suppose that is continuous on and differentiable on . Also suppose that for all . If , what are the largest and smallest possible values for ?    Let and suppose that but . Show that     Let be differentiable on an interval .    If on show that is one-to-one on .    Provide an example to show that the converse statement need not be true.      Suppose that and are both continuous on and differentiable on . Also suppose that and for all . Show that .    A fixed point of a function is a value where . Show that if is differentiable on an interval with , then can have at most one fixed point.     "
},
{
  "id": "hw3",
  "level": "1",
  "url": "hw3.html",
  "type": "Worksheet",
  "number": "",
  "title": "MTH 428\/528 Homework 3 Due February 16",
  "body": " MTH 428\/528 Homework 3 Due February 16     Let     Find the pointwise limit of for all .    Is the convergence uniform on ?    Is the convergence uniform on ?    Is the convergence uniform on       Let be a sequence of continuous functions that converges uniformly to on a compact set . If on , show converges uniformly to     Suppose and are uniformly convergent sequences of functions.   Show that is a uniformly convergent sequence of functions.    Give an example to show that the product may not converge uniformly.       Suppose that uniformly on a set . Show that if each is bounded, then is also bounded.    Suppose that uniformly on a set . Show that if each is uniformly continuous, then is also uniformly continuous.     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
