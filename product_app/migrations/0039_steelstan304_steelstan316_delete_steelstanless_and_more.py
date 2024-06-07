# Generated by Django 4.2.7 on 2024-06-01 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0038_alter_cijinkjet_type_alter_dodinkjet_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='SteelStan304',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField(default='A Steel Stanless', verbose_name='description')),
                ('pdf_file', models.FileField(upload_to='documents/SteelStan304/%y/%m%d')),
                ('image', models.ImageField(default='', upload_to='Images/SteelStan304/%y/%m%d', verbose_name='Steel Stanless 304 Images ')),
            ],
            options={
                'verbose_name': 'Steel Stanless 304',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='SteelStan316',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField(default='A Steel Stanless', verbose_name='description')),
                ('pdf_file', models.FileField(upload_to='documents/SteelStan316/%y/%m%d')),
                ('image', models.ImageField(default='', upload_to='Images/SteelStan316/%y/%m%d', verbose_name='Steel Stanless 316 Images ')),
            ],
            options={
                'verbose_name': 'Steel Stanless 316',
                'ordering': ['name'],
            },
        ),
        migrations.DeleteModel(
            name='SteelStanless',
        ),
        migrations.AlterField(
            model_name='cijinkjet',
            name='type',
            field=models.CharField(choices=[('videojet', 'videojet'), ('KGK', 'KGK')], max_length=50),
        ),
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.CharField(choices=[('EVO', 'EVO'), ('p2128', 'p2128'), ('bicolor', 'bicolor')], max_length=50),
        ),
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.CharField(choices=[('fiber', 'fiber'), ('co2', 'co2'), ('uv', 'uv')], max_length=50),
        ),
        migrations.AlterField(
            model_name='reciprocatingcompressor',
            name='type',
            field=models.CharField(choices=[('Oil Free', 'Oil Free'), ('Oil Injected', 'Oil Injected')], max_length=50),
        ),
    ]