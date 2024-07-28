const categories = ['Lower Primary', 'Upper Primary', 'High School', 'Higher Secondary', 'Junior', 'Senior', 'General'];
const sectors = [
  "Kunnamangalam",
  "Pathimangalam",
  "Mavoor",
  "Kuttikkattoor",
  "Perumanna",
  "Cherooppa",
  "Thathoor",
  "Chathamangalam",
  "Peruvayal"
];

const itemsByCategory = {
  'Lower Primary': ['Elocution', 'Madh Song', 'Quiz', 'Story Telling', 'Pencil Drawing', 'Water Color', 'Language Game', 'Reading Ml', 'Reading Arb-Ml', 'Book Test', 'Pencil Drawing G', 'Water Color G', 'Handwriting M G'],
  'Upper Primary': ['Elocution', 'Mappilappattu', 'Story Writing', 'Quiz', 'Story Telling', 'Ganitha Keli', 'Pencil Drawing', 'Water Color', 'Spelling Bee', 'Reading Eng', 'Book Test', 'Pencil Drawing G', 'Water Color G', 'Book Test G', 'Story Writing G'],
  'High School': ['Elocution M', 'Elocution E', 'Mappilappattu', 'Madh Ganam', 'Poem Recitation A',  'Poem Recitation M','Poem Recitation U', 'Story Writing', 'Quiz', 'Poem Making', 'Essay Writing M', 'News Reading', 'Pencil Drawing', 'Water Color', 'Caption Writing', 'Language Game E', 'Book Test', 'Embroidery', 'Pencil Drawing G', 'Water Color G', 'Book Test G', 'Story Writing G', 'Poem Making G'],
  'Higher Secondary': ['Elocution M', 'Mappilappattu', 'Bakthi Ganam', 'Poem Recitation U', 'Story Writing', 'Quiz', 'Poem Making', 'Essay Writing M', 'Essay Writing E', 'News Writing', 'Calligraphy', 'Pencil Drawing', 'Water Color', 'Caption Writing', 'Book Test', 'Calligraphy G', 'Story Writing G', 'Poem Making G', 'Book Test G'],
  'Junior': ['Elocution M', 'Elocution A', 'Elocution E', 'Mappilappattu', 'Reading A', 'Story Writing', 'Quiz', 'Poem Making', 'Essay Writing M', 'Essay Writing A', 'Mudravakya Rachana', 'Madh Gaana Rachana', 'Translatoin A', 'Calligraphy', 'feature Writing', 'Social Text', 'Sahithya Samvadam', 'Hadees Musabaqa', 'Book Test'],
  'Senior': ['Elocution M', 'Elocution U', 'Elocution E','Story Writing', 'Mappilappattu', 'Hamd Urdu', 'Poem Recitaton E', "Musha'ara Alfiya", 'Quiz', 'Poem Making', 'Poem Making E', 'Essay Writing M', 'Essay Writing E', 'Essay Writing U', 'Mudravakya Rachana', 'Madh Gaana Rachana', 'Translatoin E', 'Poster Designing', 'feature Writing', 'Social Text', 'E Poster', 'Survey Tool', 'Digital Illustration', 'Book Test'],
  'General': ['Spot Magazine', 'Daff', 'Social Story', 'Arabana', 'Group Song A', 'Group Song B', 'Moulid', 'Qaseeda', 'Viplava Gaanam', 'Chumarezuth', 'Malappatt', 'Risala Quiz', 'Qawali', 'Viplava gaana rachana', 'Mapilappatt Rachana', 'Project', 'Collage', 'Nasheeda', 'Sufi Geetham', 'Family Magazine']
};

const slides = [
  "https://res.cloudinary.com/do0mvctrk/image/upload/v1721982139/SSF_Kunnamangalam_Division_30th_Edition_Sahityotsav_2023July_01_02At_Kunnamangalam_sahityotsav2023_sahityotsav_30th_edition_arts_culture_literature_revolution_students_knowledge_competetion_winner_spi_zjcq6h.jpg",
  "https://res.cloudinary.com/do0mvctrk/image/upload/v1721982139/357480395_572652891493163_603989940549611415_n_nyk12s.jpg",
  "https://res.cloudinary.com/do0mvctrk/image/upload/v1721982139/358020129_2541173729369497_4997410294927867411_n_vudwn3.jpg",
  "https://res.cloudinary.com/do0mvctrk/image/upload/v1721982139/SSF_Kunnamangalam_Division_30th_Edition_Sahityotsav_2023July_01_02At_Kunnamangalam_sahityotsav2023_sahityotsav_30th_edition_arts_culture_literature_revolution_students_knowledge_competetion_winner_spi_zjcq6h.jpg",
  "https://res.cloudinary.com/do0mvctrk/image/upload/v1721982139/SSF_Kunnamangalam_Division_30th_Edition_Sahityotsav_2023July_01_02At_Kunnamangalam_sahityotsav2023_sahityotsav_30th_edition_arts_culture_literature_revolution_students_knowledge_competetion_winner_1_jwnfab.jpg",
  "https://res.cloudinary.com/do0mvctrk/image/upload/v1721982139/SSF_Kunnamangalam_Division_30th_Edition_Sahityotsav_2023July_01_02At_Kunnamangalam_sahityotsav2023_sahityotsav_30th_edition_arts_culture_literature_revolution_students_knowledge_competetion_winner_2_gywuvn.jpg",
  "https://res.cloudinary.com/do0mvctrk/image/upload/v1721982138/SSF_Kunnamangalam_Division_30th_Edition_Sahityotsav_2023July_01_02At_Kunnamangalam_sahityotsav2023_sahityotsav_30th_edition_arts_culture_literature_revolution_students_knowledge_competetion_winner_3_rh0wn1.jpg",
];
export {categories,sectors,itemsByCategory ,slides}