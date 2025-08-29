
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ruler } from "lucide-react";

const StitchingSizeChart = () => {
  const shirtSizes = [
    { size: 'XS', chest: '32"', waist: '26"', shoulder: '14"', length: '24"' },
    { size: 'S', chest: '34"', waist: '28"', shoulder: '15"', length: '25"' },
    { size: 'M', chest: '36"', waist: '30"', shoulder: '16"', length: '26"' },
    { size: 'L', chest: '38"', waist: '32"', shoulder: '17"', length: '27"' },
    { size: 'XL', chest: '40"', waist: '34"', shoulder: '18"', length: '28"' },
    { size: 'XXL', chest: '42"', waist: '36"', shoulder: '19"', length: '29"' }
  ];

  const trouserSizes = [
    { size: 'XS', waist: '26"', hip: '36"', thigh: '20"', length: '38"' },
    { size: 'S', waist: '28"', hip: '38"', thigh: '22"', length: '39"' },
    { size: 'M', waist: '30"', hip: '40"', thigh: '24"', length: '40"' },
    { size: 'L', waist: '32"', hip: '42"', thigh: '26"', length: '41"' },
    { size: 'XL', waist: '34"', hip: '44"', thigh: '28"', length: '42"' },
    { size: 'XXL', waist: '36"', hip: '46"', thigh: '30"', length: '43"' }
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-200">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
            <Ruler className="h-8 w-8" />
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
          Ladies Size Chart
        </h3>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Please refer to our size chart for accurate measurements. All measurements are in inches.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Shirt Size Chart */}
        <Card className="border border-gray-200">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-black flex items-center justify-center gap-2">
              <Badge className="bg-black text-white">Shirts</Badge>
              Ladies Shirt Sizes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">Size</TableHead>
                  <TableHead className="font-bold text-black">Chest</TableHead>
                  <TableHead className="font-bold text-black">Waist</TableHead>
                  <TableHead className="font-bold text-black">Shoulder</TableHead>
                  <TableHead className="font-bold text-black">Length</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shirtSizes.map((size, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-bold text-black">{size.size}</TableCell>
                    <TableCell className="text-gray-700">{size.chest}</TableCell>
                    <TableCell className="text-gray-700">{size.waist}</TableCell>
                    <TableCell className="text-gray-700">{size.shoulder}</TableCell>
                    <TableCell className="text-gray-700">{size.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Trouser Size Chart */}
        <Card className="border border-gray-200">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-black flex items-center justify-center gap-2">
              <Badge className="bg-black text-white">Trousers</Badge>
              Ladies Trouser Sizes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">Size</TableHead>
                  <TableHead className="font-bold text-black">Waist</TableHead>
                  <TableHead className="font-bold text-black">Hip</TableHead>
                  <TableHead className="font-bold text-black">Thigh</TableHead>
                  <TableHead className="font-bold text-black">Length</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trouserSizes.map((size, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-bold text-black">{size.size}</TableCell>
                    <TableCell className="text-gray-700">{size.waist}</TableCell>
                    <TableCell className="text-gray-700">{size.hip}</TableCell>
                    <TableCell className="text-gray-700">{size.thigh}</TableCell>
                    <TableCell className="text-gray-700">{size.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Measurement Instructions */}
      <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-bold mb-4 text-black">How to Measure</h4>
        <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h5 className="font-semibold text-black mb-2">For Shirts:</h5>
            <ul className="space-y-1">
              <li><strong>Chest:</strong> Measure around the fullest part</li>
              <li><strong>Waist:</strong> Measure around the narrowest part</li>
              <li><strong>Shoulder:</strong> Measure from shoulder point to shoulder point</li>
              <li><strong>Length:</strong> Measure from shoulder to desired hem length</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-black mb-2">For Trousers:</h5>
            <ul className="space-y-1">
              <li><strong>Waist:</strong> Measure around the natural waistline</li>
              <li><strong>Hip:</strong> Measure around the fullest part of hips</li>
              <li><strong>Thigh:</strong> Measure around the fullest part of thigh</li>
              <li><strong>Length:</strong> Measure from waist to desired ankle length</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StitchingSizeChart;
