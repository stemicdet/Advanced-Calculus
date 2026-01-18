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
