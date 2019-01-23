using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebPageTester
{
    public class calc
    {
        public string createCoords(int x0, int y0, int radius, int modulo)
        {
            string[] coordsArray = new string[modulo];

            for (int i = 0; i < modulo; i++)
            {
                //decimal x = Math.Abs((x0 + radius * Math.Cos(2 * Math.PI * i / modulo) - 2 * x0));  //returns string x coord
                //decimal y = Math.Abs((y0 + radius * Math.Sin(2 * Math.PI * i / modulo) - 2 * y0);  //returns string y coord
                //coordsArray[i] = 
                //myCoords.push([x, y]);
            }
                return "hi";
        }

        public string createMatrix()
        {


            return "hi";
        }
    }

//    function createCoords(x0, y0, radius, modulo)
//    {
//        // coordinates will be calculated from the 9 0'clock position as being the start (so we move 180 degrees around the circle by reflecting each point about the centre)
//        var myCoords = [];                        // array to hold circular coordinates;
//        for (var i = 0; i < modulo; i++)
//        {
//            var x = Math.abs((x0 + radius * Math.cos(2 * Math.PI * i / modulo) - 2 * x0).toFixed(2));  //returns string x coord
//            var y = Math.abs((y0 + radius * Math.sin(2 * Math.PI * i / modulo) - 2 * y0).toFixed(2));  //returns string y coord
//            myCoords.push([x, y]);
//    }
//            //cumulativeCoordsRPC += 1;
//            return JSON.stringify(myCoords);            // return as a JSON object string
//        }
//function createMatrix(multiplier, modulo)
//{
//    var myMatrix = [];                         // array to hold multiplication results matrix;
//    for (var i = 0; i < modulo; i++)
//    {
//        var result = (i * multiplier) % modulo;
//        myMatrix.push([i, result])
//            }
//            //cumulativeMatrixRPC += 1;
//            return JSON.stringify(myMatrix);           // return as a JSON object string
//        }
}