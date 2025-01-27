# Generated by Django 4.2.17 on 2025-01-14 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subcategories', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='subcategory',
            unique_together={('category', 'slug')},
        ),
        migrations.AddIndex(
            model_name='subcategory',
            index=models.Index(fields=['category', 'slug'], name='subcategori_categor_544ada_idx'),
        ),
    ]
