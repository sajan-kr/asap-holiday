import jsPDF from "jspdf";

export const generateBrochure = (tour) => {
  const doc = new jsPDF();

  // Heading
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("ASAP Holidays", 20, 20);

  // Tour Title
  doc.setFontSize(18);
  doc.text(tour.title, 20, 35);

  // Basic Details
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text(`Location: ${tour.location}`, 20, 50);
  doc.text(`Duration: ${tour.duration}`, 20, 60);
  doc.text(`Price: ${tour.price}`, 20, 70);

  // Description
  doc.setFont("helvetica", "bold");
  doc.text("Description", 20, 90);

  doc.setFont("helvetica", "normal");
  doc.text(doc.splitTextToSize(tour.description, 170), 20, 100);

  // Highlights
  let y = 140;

  doc.setFont("helvetica", "bold");
  doc.text("Tour Highlights", 20, y);

  y += 10;

  doc.setFont("helvetica", "normal");

  tour.highlights.forEach((item) => {
    doc.text(`• ${item}`, 25, y);
    y += 8;
  });

  // Footer
  doc.setFontSize(10);

  doc.text(
    "ASAP Holidays | www.asapholidays.com | +91 9205129996",
    20,
    285
  );

  // Download PDF
  doc.save(`${tour.slug}-brochure.pdf`);
};